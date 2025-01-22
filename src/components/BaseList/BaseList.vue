<script setup lang="ts">
import type { Component } from 'vue';


defineProps<{
  listItems: object
  itemComponent: Component
}>()

</script>


<template>
  <ul class="space-y-2">
    <li v-for="(item, index) in listItems" :key="index">
      <component :is="itemComponent" :item="item" v-bind="$attrs" />
    </li>
  </ul>
</template>
