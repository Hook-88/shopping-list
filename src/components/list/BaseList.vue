<script setup lang="ts">
defineProps<{
  listData: object[]
}>()

</script>

<template>
  <ul>
    <li v-for="(item, index) in listData" :key="index">
      item
    </li>
  </ul>
</template>
