import { useEffect, useRef, useState } from 'react';

const JS_DOS_CDN = 'https://v8.js-dos.com/latest/';
const DOOM_BUNDLE = 'https://v8.js-dos.com/bundles/doom.jsdos';

function Doom() {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let disposed = false;
    if (!document.getElementById('js-dos-css')) {
      const style = document.createElement('style');
      style.id = 'js-dos-css';
      document.head.appendChild(style);
      fetch(JS_DOS_CDN + 'js-dos.css')
        .then((res) => res.text())
        .then((text) => {
          const idx = text.indexOf('.jsdos-rso{');
          style.innerHTML = idx > -1 ? text.substring(idx) : text;
        });
    }
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          if (existing.dataset.loaded === 'true') {
            resolve();
            return;
          }
          const handleLoad = () => {
            existing.dataset.loaded = 'true';
            resolve();
          };
          const handleError = () => reject(new Error(`Failed to load script: ${src}`));
          existing.addEventListener('load', handleLoad, { once: true });
          existing.addEventListener('error', handleError, { once: true });
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => {
          s.dataset.loaded = 'true';
          resolve();
        };
        s.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(s);
      });
    (async () => {
      try {
        setStatus('loading');
        setError('');
        await loadScript(JS_DOS_CDN + 'js-dos.js');
        if (disposed) return;
        const dosFactory = window.Dos;
        if (typeof dosFactory !== 'function') {
          throw new Error('js-dos loaded but window.Dos is unavailable');
        }
        await new Promise(r => setTimeout(r, 100));
        instanceRef.current = dosFactory(container, {
          url: DOOM_BUNDLE,
        });
        setStatus('ready');
      } catch (err) {
        console.error('Failed to initialise DOOM:', err);
        setError(
          err instanceof Error
            ? err.message
            : 'Unknown error while loading DOOM.'
        );
        setStatus('error');
      }
    })();
    return () => {
      disposed = true;
      try {
        instanceRef.current?.stop?.();
      } catch {
      }
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000' }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          background: '#000',
          visibility: status === 'ready' ? 'visible' : 'hidden',
        }}
      />
      {status === 'loading' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            color: '#ddd',
            fontSize: 14,
            letterSpacing: 0.4,
          }}
        >
          Loading DOOM…
        </div>
      )}
      {status === 'error' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            color: '#ff8a8a',
            textAlign: 'center',
            padding: 16,
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          <div>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>DOOM failed to load.</div>
            <div>{error || 'Please check your internet connection and try again.'}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doom;