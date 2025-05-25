import { createApp } from 'vue'
import type { App as VueApp } from 'vue'
import App from './App.vue'

let appInstance: VueApp<Element> | null = null

export function mount(container: string | Element): void {
  appInstance = createApp(App)
  appInstance.mount(container)
}

export function unmount(): void {
  if (appInstance) {
    appInstance.unmount()
    appInstance = null
  }
}
