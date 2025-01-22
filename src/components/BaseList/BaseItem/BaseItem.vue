<script setup lang="ts">

defineProps<{
  item: {
    name: string
  }
}>()


</script>

<template>
  <div>
    <p>{{ item.name }}</p>
  </div>
</template>
