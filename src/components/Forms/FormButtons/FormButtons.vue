<script setup lang="ts">
defineProps<{
  onCancel: () => void
}>()
</script>

<template>
  <div class="flex gap-2 mt-2">
    <button class="flex-grow bg-green-800 py-2 px-4">Add item</button>
    <button class="bg-red-800 py-2 px-4" type="button" @click="onCancel">Cancel</button>
  </div>
</template>
