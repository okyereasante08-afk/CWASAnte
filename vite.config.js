import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Calculus With Asante',
        short_name: 'C.W.A.',
        description: 'Quiz drills, mock exams, topic booklets, and a glossary for MATH 152 Calculus & Analysis.',
        theme_color: '#1f3b34',
        background_color: '#faf8f4',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Cache the embedded HTML tools and PDFs so the hub still opens offline
        // after a first visit; PDFs are cached on first open (runtime), not
        // pre-cached, since they can be a few hundred KB each.
        globPatterns: ['**/*.{js,css,html,ico,svg,png}'],
        runtimeCaching: [
          {
            urlPattern: /\/pdfs\/.*\.pdf$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cwa-pdfs',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            urlPattern: /\/tools\/.*\.html$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cwa-tools',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
})
