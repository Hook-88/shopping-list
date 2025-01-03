<script setup lang="ts">
import type { Component } from 'vue';


interface Props<T> {
  listItems: T[]
  itemComponent: Component
}


defineProps<Props<{ name: string }>>()

</script>


<template>
  <ul class="space-y-2">
    <component :is="itemComponent" v-for="(item, index) in listItems" :key="index" :item="item" />
  </ul>
</template>
