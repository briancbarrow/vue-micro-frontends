<script setup lang="ts">
import { useSessionStore } from '@/stores/session'

const sessionStore = useSessionStore()
</script>

<template>
  <header>
    <nav class="mx-auto flex items-center justify-center p-6" aria-label="Global">
      <div class="flex items-center gap-x-12">
        <p class="text-xl font-bold">VUE MICRO FRONTEND SAMPLE PROJECT</p>
      </div>
      <div v-if="!sessionStore.session" class="ml-auto lg:flex lg:flex-1 lg:justify-end">
        <RouterLink to="/signin" class="text-sm/6 font-semibold text-gray-900"
          >Log in
          <span aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>
    </nav>
  </header>
  <slot />
</template>
