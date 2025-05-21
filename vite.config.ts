import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',

      shared: ['vue'],
    }),
  ],
  // server: {
  //   port: 5010,
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
