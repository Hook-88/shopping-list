<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps<{
  listData: object[]
  listComponent: Component
  highligtedIds?: string[]
}>()

function isHighlighted(id: string) {
  if (!props.highligtedIds) {
    throw new Error("Highlighted id's is undefined...")
  }

  return props.highligtedIds.includes(id)
}

</script>

<template>
  <ul class="space-y-2">
    <li v-for="(item, index) in listData" :key="index">
      <component :is="listComponent" :item="item" :isHighlighted="isHighlighted(item.id)" />
    </li>
  </ul>
</template>
