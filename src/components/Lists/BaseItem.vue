<script setup lang="ts">
interface Item {
  name: string,
  id: string,
}

interface Props {
  item: Item
}

defineProps<Props>()

</script>

<template>
  <li>{{ item.name }}</li>
</template>
