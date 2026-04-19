import { useState, useEffect, useRef, useCallback } from "react"
import { Clock3, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react'

export default function Browser() {
  const [iframeUrl, setIframeUrl] = useState('')
  const [inputUrl, setInputUrl] = useState('https://google.com')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [searchHistory, setSearchHistory] = useState([])
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
  const searchUiRef = useRef(null)
  const iframeRef = useRef(null)
  const lastProxiedUrlRef = useRef('')
  const SEARCH_HISTORY_KEY = 'browser-search-history-v1'
  const MAX_SEARCH_HISTORY = 8

  useEffect(() => {
    const saved = localStorage.getItem(SEARCH_HISTORY_KEY)
    if (saved) {
      try {
        setSearchHistory(JSON.parse(saved).slice(0, MAX_SEARCH_HISTORY))
      } catch (e) {
        console.error('Failed to load search history:', e)
      }
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchHistory))
  }, [searchHistory])
  const saveSearchHistory = useCallback((term) => {
    if (!term.trim()) return
    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== term)
      return [term, ...filtered].slice(0, MAX_SEARCH_HISTORY)
    })
  }, [])
  const clearSearchHistory = useCallback(() => {
    setSearchHistory([])
  }, [])
  const isValidUrl = (string) => {
    if (string.includes(' ')) return false
    try {
      const url = new URL(string.startsWith('http') ? string : `https://${string}`)
      return url.hostname.includes('.') || url.hostname === 'localhost'
    } catch (_) {
      return false
    }
  }
  const handleSubmit = async (url = inputUrl) => {
    setLoading(true)
    setIsSearchDropdownOpen(false)
    try {
      let targetUrl
      if (isValidUrl(url)) {
        targetUrl = url.startsWith('http') ? url : `https://${url}`
        saveSearchHistory(targetUrl)
      } else {
        targetUrl = `https://duckduckgo.com/?q=${encodeURIComponent(url)}`
        saveSearchHistory(url)
      }
      const normalizedTarget = new URL(targetUrl).toString()
      const response = await fetch(`/api/api?url=${encodeURIComponent(normalizedTarget)}`)
      const data = await response.json()
      const proxiedUrl = data.url || data.streamingUrls?.[0]?.url
      if (proxiedUrl) {
        lastProxiedUrlRef.current = proxiedUrl
        setIframeUrl(proxiedUrl)
        const newHistory = history.slice(0, currentIndex + 1)
        newHistory.push({ original: targetUrl, proxied: proxiedUrl })
        setHistory(newHistory)
        setCurrentIndex(newHistory.length - 1)
      } else {
        console.error("No url field in response:", data)
      }
    } catch (error) {
      console.error("Error fetching URL:", error)
    }
    setLoading(false)
  }
  const handleIframeLoad = useCallback(() => {
    if (iframeRef.current && iframeRef.current.src) {
      lastProxiedUrlRef.current = iframeRef.current.src
    }
  }, [])
  const handleBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      setIframeUrl(history[newIndex].proxied)
      setInputUrl(history[newIndex].original)
    }
  }
  const handleForward = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      setIframeUrl(history[newIndex].proxied)
      setInputUrl(history[newIndex].original)
    }
  }
  const handleReload = () => {
    if (currentIndex >= 0) {
      handleSubmit(history[currentIndex].original)
    }
  }
  const handleSearchSuggestion = (item) => {
    setInputUrl(item)
    setIsSearchDropdownOpen(false)
    handleSubmit(item)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchUiRef.current && !searchUiRef.current.contains(event.target)) {
        setIsSearchDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="chrome-app">
      <div className="chrome-toolbar">
        <button onClick={handleBack} disabled={currentIndex <= 0} className="chrome-nav-button">
          <ArrowLeft size={20} />
        </button>
        <button onClick={handleForward} disabled={currentIndex >= history.length - 1} className="chrome-nav-button">
          <ArrowRight size={20} />
        </button>
        <button onClick={handleReload} disabled={!iframeUrl || loading} className="chrome-nav-button">
          <RotateCw size={20} />
        </button>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className="chrome-search-form" ref={searchUiRef}>
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onFocus={() => setIsSearchDropdownOpen(true)}
            className="chrome-search-input"
            placeholder="Search typing..."
          />
          {isSearchDropdownOpen && (
            <div className="chrome-search-dropdown">
              <div className="chrome-search-head">
                <span>Recent searches</span>
                {searchHistory.length > 0 && (
                  <button type="button" className="chrome-search-clear" onClick={clearSearchHistory}>
                    Clear
                  </button>
                )}
              </div>
              {searchHistory.length === 0 && (
                <div className="chrome-search-hint">No search history yet</div>
              )}
              {searchHistory.map((item) => (
                <button
                  type="button"
                  key={`history-${item}`}
                  className="chrome-search-item"
                  onClick={() => handleSearchSuggestion(item)}
                >
                  <span className="chrome-search-item-clock"><Clock3 size={14} color="#ffffff" /></span>
                  <span>{item}</span>
                </button>
              ))}
            </div>
          )}
        </form>
      </div>
      <div className="chrome-content">
        {loading && <div className="chrome-loading">Loading...</div>}
        <iframe
          ref={iframeRef}
          src={iframeUrl || undefined}
          onLoad={handleIframeLoad}
          title="Browser Content"
          referrerPolicy="no-referrer"
          allow="accelerometer; autoplay; clipboard-read; clipboard-write; encrypted-media; gyroscope; picture-in-picture; display-capture; camera; microphone; fullscreen; storage-access"
          allowFullScreen
          className="chrome-iframe"
        />
      </div>
    </div>
  )
}
