<script setup lang="ts">
defineProps({
  number: Number,
})
</script>

<template>
  <div class="flex justify-center items-center h-full border rounded border-indigo-500">
    <h1 class="font-4xl font-bold uppercase">Placeholder {{ number }}</h1>
  </div>
</template>
