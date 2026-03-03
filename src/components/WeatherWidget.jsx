import { useEffect, useState } from 'react'
const WMO = {
  0:  { label: 'Clear Sky',        icon: '☀️'  },
  1:  { label: 'Mainly Clear',     icon: '🌤️'  },
  2:  { label: 'Partly Cloudy',    icon: '⛅'  },
  3:  { label: 'Overcast',         icon: '☁️'  },
  45: { label: 'Foggy',            icon: '🌫️'  },
  48: { label: 'Icy Fog',          icon: '🌫️'  },
  51: { label: 'Light Drizzle',    icon: '🌦️'  },
  53: { label: 'Drizzle',          icon: '🌦️'  },
  55: { label: 'Heavy Drizzle',    icon: '🌧️'  },
  61: { label: 'Light Rain',       icon: '🌧️'  },
  63: { label: 'Rain',             icon: '🌧️'  },
  65: { label: 'Heavy Rain',       icon: '🌧️'  },
  71: { label: 'Light Snow',       icon: '🌨️'  },
  73: { label: 'Snow',             icon: '❄️'   },
  75: { label: 'Heavy Snow',       icon: '❄️'   },
  77: { label: 'Snow Grains',      icon: '❄️'   },
  80: { label: 'Rain Showers',     icon: '🌦️'  },
  81: { label: 'Mod. Showers',     icon: '🌦️'  },
  82: { label: 'Heavy Showers',    icon: '⛈️'  },
  85: { label: 'Snow Showers',     icon: '🌨️'  },
  95: { label: 'Thunderstorm',     icon: '⛈️'  },
  99: { label: 'Hail Storm',       icon: '⛈️'  },
}
function getInfo(code) {
  if (WMO[code]) return WMO[code]
  const closest = Object.keys(WMO)
    .map(Number)
    .filter((k) => k <= code)
    .sort((a, b) => b - a)[0]
  return WMO[closest] ?? { label: 'Unknown', icon: '🌡️' }
}
export default function WeatherWidget({ onWeatherCode }) {
  const [state, setState] = useState({ status: 'idle', data: null, error: null })
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState({ status: 'error', data: null, error: 'Location timeout' })
    }, 5000)
    setState((s) => ({ ...s, status: 'loading' }))
    if (!navigator.geolocation) {
      setState({ status: 'error', data: null, error: 'Geolocation not supported' })
      clearTimeout(timeoutId)
      return
    }
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude: lat, longitude: lon } }) => {
        clearTimeout(timeoutId)
        try {
          const [wRes, gRes] = await Promise.all([
            fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
              `&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh`
            )
          ])
          const wData = await wRes.json()
          const gData = await gRes.json()
          const { temperature, weathercode, windspeed } = wData.current_weather
          const city =
            gData.address?.city ||
            gData.address?.town  ||
            gData.address?.village ||
            gData.address?.county ||
            'Unknown'
          const data = {
            temp: Math.round(temperature),
            code: weathercode,
            wind: Math.round(windspeed),
            city,
          }
          setState({ status: 'done', data, error: null })
          onWeatherCode?.(weathercode)
        } catch (err) {
          setState({ status: 'error', data: null, error: 'Weather unavailable' })
        }
      },
      () => {
        clearTimeout(timeoutId)
        setState({ status: 'error', data: null, error: 'Location denied' })
      }
    )
    return () => clearTimeout(timeoutId)
  }, [])
  const { status, data, error } = state
  if (status === 'loading' || status === 'idle')
    return <div className="weather-widget loading">Fetching weather…</div>
  if (status === 'error')
    return <div className="weather-widget error">⚠ {error}</div>
  const info = getInfo(data.code)
  return (
    <div className="weather-widget">
      <span className="weather-icon">{info.icon}</span>
      <div className="weather-details">
        <span className="weather-temp">{data.temp}°C</span>
        <span className="weather-label">{info.label}</span>
      </div>
    </div>
  )
}
