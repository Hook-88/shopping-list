<script setup lang="ts">
import { useToolbarStore } from '@/stores/toolbar';

const toolbarStore = useToolbarStore()

</script>

<template>
  <div v-if="toolbarStore.isOpen"
    class="fixed inset-x-0 bottom-10 mx-2 bg-[#1c1c1c] flex justify-between border rounded border-[#d1d2d3]/20">
    <component v-if="toolbarStore.component" :is="toolbarStore.component" v-bind="toolbarStore.props" />
  </div>
</template>
