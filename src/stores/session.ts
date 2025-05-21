import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Session } from '@supabase/supabase-js'

export const useSessionStore = defineStore('session', () => {
  const session = ref<Session | null>(null)

  return { session }
})
