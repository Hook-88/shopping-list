<script setup lang="ts">
import type { Component } from 'vue';

interface BaseItem {
  name: string,
  id: string
}

interface Props<T extends BaseItem> {
  listItems: T[]
  itemComponent: Component
}


defineProps<Props<BaseItem>>()

</script>


<template>
  <ul class="space-y-2">
    <component :is="itemComponent" v-for="(item, index) in listItems" :key="index" :item="item" />
  </ul>
</template>
