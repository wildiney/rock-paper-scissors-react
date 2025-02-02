import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Jokenpo',
        short_name: 'Jokenpo',
        description: 'Jokenpo Game',
        theme_color: '#bc658d',
        icons: [
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: "/rock-paper-scissors-react/",
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: 'v8'
    },
  },
  server: {
    open: true,
    port: 3000
  }
})
