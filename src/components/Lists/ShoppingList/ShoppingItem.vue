<script setup lang="ts">
interface Item {
  name: string
  id: string
  quantity: number
}

interface Props {
  item: Item
}

defineProps<Props>()

</script>

<template>
  <li class="border border-[#d1d2d3]/20 p-2 rounded-sm">{{ item.name }}</li>
</template>
