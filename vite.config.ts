import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for bundled files
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Use chunk name for JS files
      },
    },
  },
})
