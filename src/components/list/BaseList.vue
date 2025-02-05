<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  listData: object[]
  listComponent: Component
}>()

</script>

<template>
  <ul class="space-y-2">
    <li v-for="(item, index) in listData" :key="index">
      <component :is="listComponent" :item="item" />
    </li>
  </ul>
</template>
