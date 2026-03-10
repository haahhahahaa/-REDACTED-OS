import { useEffect, useRef } from 'react'
import { MdRefresh, MdSettings, MdPalette } from 'react-icons/md'

const MENU_ITEMS = [
  { label: 'Refresh', icon: MdRefresh, action: 'refresh' },
  { label: 'Settings', icon: MdSettings, action: 'settings' },
  { label: 'Personalize', icon: MdPalette, action: 'personalize' },
]

export default function ContextMenu({ x, y, onClose, onOpenApp }) {
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = () => onClose()
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('click', handleClick)
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])
  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect()
      const el = menuRef.current
      if (rect.right > window.innerWidth) {
        el.style.left = `${window.innerWidth - rect.width - 8}px`
      }
      if (rect.bottom > window.innerHeight - 44) {
        el.style.top = `${window.innerHeight - 44 - rect.height - 8}px`
      }
    }
  }, [x, y])

  const handleAction = (action) => {
    if (action === 'refresh') {
      window.dispatchEvent(new Event('resize'))
    } else if (action === 'settings') {
      onOpenApp({
        id: 'settings',
        name: 'Settings',
        icon: 'https://img.icons8.com/fluency/48/settings.png',
        appProps: { initialTab: 'system', initialSubPage: null },
      })
    } else if (action === 'personalize') {
      onOpenApp({
        id: 'settings',
        name: 'Settings',
        icon: 'https://img.icons8.com/fluency/48/settings.png',
        appProps: {
          initialTab: 'personalization',
          initialSubPage: { id: 'themes', title: 'Themes & Colors' },
        },
      })
    }
    onClose()
  }

  return (
    <div
      ref={menuRef}
      className="context-menu"
      style={{ left: x, top: y }}
      onClick={(e) => e.stopPropagation()}
    >
      {MENU_ITEMS.map((item, i) => {
        if (item.type === 'divider') {
          return <div key={i} className="ctx-divider" />
        }
        const IconComponent = item.icon
        return (
          <div
            key={i}
            className="ctx-item"
            onClick={() => handleAction(item.action)}
          >
            <span className="ctx-icon">
              {typeof IconComponent === 'function' ? <IconComponent size={16} /> : IconComponent}
            </span>
            <span className="ctx-label">{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}
