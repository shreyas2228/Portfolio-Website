import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@three': path.resolve(__dirname, './src/components/three'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@data': path.resolve(__dirname, './src/data'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation': ['gsap', 'framer-motion'],
          'ui': ['react-intersection-observer'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: true,
    port: 5173,
    open: true,
  },
  optimizeDeps: {
    include: [
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'gsap',
      'framer-motion',
      'lenis',
    ],
  },
})
