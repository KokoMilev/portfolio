import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('Serving public files from:', __dirname + '/public');
console.log('Trying to load:', '/models/cube.glb');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
