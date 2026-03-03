import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react()
    ],
    server: {
      proxy: {
        '/vps': {
          target: env.VITE_BROWSER_URL,  // you need an env for this to work
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/vps/, ''),
          cookieDomainRewrite: ""
        }
      }
    }
  }
})
