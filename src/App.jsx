import { useState, useEffect } from 'react'
import LockScreen from './components/LockScreen'
import UnlockOverlay from './components/UnlockOverlay'
import Desktop from './components/Desktop'
import './components/components.css'
import './components/MobileBlocker.css'
import { useUser } from './contexts/UserContext'

const RM_CRASH_COOKIE = 'os_rm_lock'
const hasRmCrashCookie = () =>
  document.cookie.split(';').some((c) => c.trim().startsWith(`${RM_CRASH_COOKIE}=`))

function App() {
  const [phase, setPhase] = useState('locked')
  const { currentColors } = useUser()
  const [isSystemLocked, setIsSystemLocked] = useState(() => hasRmCrashCookie())

  useEffect(() => {
    const onFocus = () => setIsSystemLocked(hasRmCrashCookie())
    window.addEventListener('focus', onFocus)
    return () => window.removeEventListener('focus', onFocus)
  }, [])

  if (isSystemLocked) {
    return (
      <div className="mobile-blocker visible">
        <video
          src="/rm-rf-meme.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/rm-meme.jpeg"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    )
  }

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (currentColors) {
      Object.entries(currentColors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  }, [currentColors]);

  // Global keyboard listener
  useEffect(() => {
    const onKey = (e) => {
      if (
        phase === 'locked' &&
        (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowUp')
      ) {
        e.preventDefault()
        setPhase('unlocking')
      }
      if (phase === 'unlocking' && (e.code === 'Escape' || e.code === 'Space' || e.code === 'ArrowDown')) {
        setPhase('locked')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase])

  const handleScreenClick = () => {
    if (phase === 'locked') setPhase('unlocking')
  }

  if (phase === 'desktop') {
    return <Desktop onLock={() => setPhase('locked')} />
  }

  return (
    <div
      className="app-root"
      onClick={phase === 'locked' ? handleScreenClick : undefined}
    >
      <LockScreen unlocking={phase === 'unlocking'} />
      {phase === 'unlocking' && (
        <UnlockOverlay
          onUnlock={() => setPhase('desktop')}
          onCancel={() => setPhase('locked')}
        />
      )}
    </div>
  )
}

export default App
