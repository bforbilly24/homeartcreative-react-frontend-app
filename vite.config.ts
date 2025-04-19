import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as routerPlugin from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [react(), routerPlugin.TanStackRouterVite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'tanstack-router': ['@tanstack/react-router'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],

          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
          ],

          'animation-vendor': [
            'framer-motion',
            'motion',
            'embla-carousel-react',
            'embla-carousel-autoplay',
          ],
        },
      },
    },
  },
})
