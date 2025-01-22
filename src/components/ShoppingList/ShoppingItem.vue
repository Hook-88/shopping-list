<script setup lang="ts">
defineProps<{
  item: {
    name: string
    quantity: number
  }
}>()

</script>

<template>
  <div class="flex items-center border border-[#d1d2d3]/20 rounded p-2">
    <p>{{ item.name }}</p>
    <span v-if="item.quantity > 1">&nbsp;({{ item.quantity }}x)</span>
  </div>
</template>
