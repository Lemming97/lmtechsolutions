import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is "/" because the site is served from its own domain (www.lmtechsolutions.co)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
