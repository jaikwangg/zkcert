import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// เปลี่ยนชื่อ repo ตามจริง!
export default defineConfig({
  plugins: [react()],
  base: '/zkcert/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // <--- ใส่ alias ให้ตรง
    },
  },
})
