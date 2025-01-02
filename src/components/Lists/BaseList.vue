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
  <div>
    <header class="flex items-center justify-between">
      <small class="text-sm">(2/4)</small>
      <button class="text-sm py-1">Hide selected</button>
    </header>
    <main>
      <ul class="space-y-2">
        <component :is="itemComponent" v-for="(item, index) in listItems" :key="index" :item="item" />
      </ul>
    </main>
  </div>
</template>
