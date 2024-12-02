import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': './src',
      '@routes': path.resolve(__dirname, "/src/app/routes/")
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
})
