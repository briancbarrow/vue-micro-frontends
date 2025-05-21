<script setup lang="ts">
import ThePlaceholder from './components/ThePlaceholder.vue'
</script>

<template>
  <header>
    <nav class="mx-auto flex items-center justify-center p-6" aria-label="Global">
      <div class="flex items-center gap-x-12">
        <p class="text-xl font-bold">VUE MICRO FRONTEND SAMPLE PROJECT</p>
      </div>
    </nav>
  </header>

  <main class="grid md:grid-cols-2 grid-cols-1 min-h-[80vh] space-x-4">
    <ThePlaceholder :number="1" />
    <ThePlaceholder :number="2" />
  </main>
</template>
