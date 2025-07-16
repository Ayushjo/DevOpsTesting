import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This makes the server accessible externally
    host: true, 
    
    // Add your custom domain here
    allowedHosts: ['fedevops.iayush.com'],
  },
})
