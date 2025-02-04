<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  listData: object[]
  listComponent: Component
}>()

</script>

<template>
  <div>
    <header>
      <button class="text-sm py-1">(4/8) - completed</button>
    </header>
    <ul class="space-y-2">
      <li v-for="(item, index) in listData" :key="index">
        <component :is="listComponent" :item="item" />
      </li>
    </ul>
  </div>
</template>
