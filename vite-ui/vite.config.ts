import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// เปลี่ยนชื่อ repo ตามจริง!
export default defineConfig({
  plugins: [react()],
  base: '/zkcert/',
})
