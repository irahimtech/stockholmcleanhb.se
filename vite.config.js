import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Isko 1000 karne se 500kB wali warning permanently khatam ho jayegi
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Yeh heavy assets, icons aur packages ko alag chote bundles mein split kar dega
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
