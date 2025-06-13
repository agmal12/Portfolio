import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:process.env.VITE_BASE_PATH || "/Portfolio",
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei', 'three'],
    exclude: ['troika-three-text'] // Sometimes helps with drei
  },
  server: {
    fs: {
      strict: false
    }
  }
})
