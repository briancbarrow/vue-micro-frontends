<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import ThePlaceholder from '../components/ThePlaceholder.vue'
const TaskListMFE = defineAsyncComponent(
  // @ts-expect-error module won't be found
  () => import('micro_task_list/entry'),
)
</script>

<template>
  <TaskListMFE />
  <ThePlaceholder :number="1" />
  <ThePlaceholder :number="2" />
</template>
