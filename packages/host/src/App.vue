<script setup lang="ts">
import MainLayout from './components/layouts/MainLayout.vue'
import { supabase } from './lib/supabaseClient'
import { onMounted } from 'vue'
import { useSessionStore } from '@/stores/session'

const sessionStore = useSessionStore()

onMounted(async () => {
  try {
    // Fetch the current session from Supabase
    const {
      data: { session: currentSession },
      error: getSessionError,
    } = await supabase.auth.getSession()
    if (getSessionError) {
      console.error('Error fetching session:', getSessionError)
    } else {
      sessionStore.session = currentSession
    }

    supabase.auth.onAuthStateChange((event, newSession) => {
      sessionStore.session = newSession
    })
  } catch (error) {
    console.error('Error in onMounted:', error)
  }
})
</script>

<template>
  <MainLayout>
    <main class="">
      <RouterView />
    </main>
  </MainLayout>
</template>
