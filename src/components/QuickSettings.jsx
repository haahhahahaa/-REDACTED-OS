import React, { useState, useEffect } from 'react';
import { 
  MdWifi, 
  MdBluetooth, 
  MdAirplaneTicket, 
  MdBatteryChargingFull, 
  MdWbSunny, 
  MdVolumeUp,
  MdSettings,
  MdKeyboardArrowRight,
  MdNightlight,
  MdAccessibilityNew,
  MdEdit
} from 'react-icons/md';
export default function QuickSettings({ isOpen, onClose, onOpenSettings }) {
  const [brightness, setBrightness] = useState(80);
  const [volume, setVolume] = useState(50);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(true);
  const [airplane, setAirplane] = useState(false);
  const [saver, setSaver] = useState(false);
  
  const [wifiName, setWifiName] = useState('WiFi');
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [nightLight, setNightLight] = useState(false);
  useEffect(() => {
     if ('getBattery' in navigator) {   // Battery info
        navigator.getBattery().then(bat => {
            setBatteryLevel(Math.round(bat.level * 100));
            const updateBattery = () => setBatteryLevel(Math.round(bat.level * 100));
            bat.addEventListener('levelchange', updateBattery);
            bat.addEventListener('chargingchange', updateBattery);
        }).catch(err => console.error(err));
     }
  }, []);
  useEffect(() => {
    if (!isOpen) return;     // WiFi info, only wifi/cellular/ethernet
    if ('connection' in navigator) {
      const conn = navigator.connection;
      const updateWifi = () => {
         if (conn.type === 'wifi' || conn.effectiveType === '4g') {
           setWifiName('Wi-Fi');
         } else if (conn.type === 'cellular') {
           setWifiName('Cellular');
         } else if (conn.type === 'ethernet') {
           setWifiName('Ethernet');
         } else {
           setWifiName(navigator.onLine ? 'Network Connected' : 'No Internet');
         }
      };
      if (typeof navigator.connection.addEventListener === 'function') {
        navigator.connection.addEventListener('change', updateWifi);
      }
      return () => {
         if (typeof navigator.connection.removeEventListener === 'function') {
            navigator.connection.removeEventListener('change', updateWifi);
         }
      }
    }
    useEffect(() => {    // Night Light 
      const filter = [];
      if (brightness < 100) filter.push(`brightness(${brightness}%)`);
      if (nightLight) filter.push('sepia(40%) hue-rotate(10deg) saturate(150%)');
      document.body.style.filter = filter.join(' ') || 'none';
    }, [brightness, nightLight]);
  }, [isOpen]);


  if (!isOpen) return null;
  return (
    <div className="quick-settings-overlay" onClick={onClose}>
      <div className="quick-settings-panel" onClick={(e) => e.stopPropagation()}>
        <div className="qs-grid">
          <div className={`qs-item ${wifi ? 'active' : ''}`} onClick={() => setWifi(!wifi)}>
            <div className="qs-icon-wrapper">
              <MdWifi size={20} />
              <div className="qs-split-icon"><MdKeyboardArrowRight size={16} /></div>
            </div>
            <span className="qs-label">{wifi ? (wifiName === 'WiFi' ? 'WiFi' : wifiName) : 'Internet'}</span>
          </div>
          <div className={`qs-item ${bluetooth ? 'active' : ''}`} onClick={() => setBluetooth(!bluetooth)}>
            <div className="qs-icon-wrapper">
              <MdBluetooth size={20} />
              <div className="qs-split-icon"><MdKeyboardArrowRight size={16} /></div>
            </div>
            <span className="qs-label">Bluetooth</span>
          </div>
          <div className={`qs-item ${airplane ? 'active' : ''}`} onClick={() => setAirplane(!airplane)}>
            <div className="qs-icon-wrapper">
              <MdAirplaneTicket size={20} />
            </div>
            <span className="qs-label">Airplane</span>
          </div>
          <div className={`qs-item ${saver ? 'active' : ''}`} onClick={() => setSaver(!saver)}>
            <div className="qs-icon-wrapper">
              <MdBatteryChargingFull size={20} />
            </div>
            <span className="qs-label">Battery saver</span>
          </div>
          <div className={`qs-item ${nightLight ? 'active' : ''}`} onClick={() => setNightLight(!nightLight)}>
            <div className="qs-icon-wrapper">
              <MdNightlight size={20} />
            </div>
            <span className="qs-label">Night light</span>
          </div>
          <div className="qs-item" onClick={() => {}}>
            <div className="qs-icon-wrapper">
              <MdAccessibilityNew size={20} />
            </div>
            <span className="qs-label">Accessibility</span>
          </div>
        </div>
        <div className="qs-sliders">
          <div className="qs-slider-group">
            <MdWbSunny size={20} className="qs-slider-icon" />
            <div className="qs-slider-container">
              <div className="qs-slider-track" />
              <div className="qs-slider-fill" style={{ width: `${brightness}%` }} />
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={brightness} 
                onChange={(e) => setBrightness(e.target.value)}
                className="qs-slider"
              />
            </div>
          </div>
          <div className="qs-slider-group">
            <MdVolumeUp size={20} className="qs-slider-icon" />
            <div className="qs-slider-container">
              <div className="qs-slider-track" />
              <div className="qs-slider-fill" style={{ width: `${volume}%` }} />
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume} 
                onChange={(e) => setVolume(e.target.value)}
                className="qs-slider"
              />
            </div>
          </div>
        </div>
        <div className="qs-footer" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', padding: '0 4px', fontSize: '12px', opacity: 0.8 }}>
          <div className="qs-battery" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MdBatteryChargingFull size={16} />
            <span>{batteryLevel !== null ? batteryLevel + '%' : 'Unknown'}</span>
          </div>
          <div className="qs-footer-btns" style={{ display: 'flex', gap: '16px' }}>
             <MdSettings size={16} style={{ cursor: 'pointer' }} onClick={onOpenSettings} />
          </div>
        </div>
      </div>
    </div>
  );
}
