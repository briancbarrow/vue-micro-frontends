import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    federation({
      name: 'micro_task_list',
      filename: 'remoteEntry.js',
      exposes: {
        './entry': './src/App.vue',
      },
      shared: ['vue', 'vue-router', '@tailwindcss/vite'],
    }),
  ],
  server: {
    port: 5011,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
