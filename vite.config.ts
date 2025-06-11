import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/my-portfolio/', // Thêm base cho GitHub Pages
  plugins: [
    tailwindcss(),
  ],
})