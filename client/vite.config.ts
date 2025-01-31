import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, //3001
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },'/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    },
  },
})
