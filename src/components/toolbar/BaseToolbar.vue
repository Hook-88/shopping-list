<script setup lang="ts">
import { useToolbarStore } from '@/stores/toolbar';

const toolbarStore = useToolbarStore()

</script>

<template>
  <div class="bg-[#1f1f1f] p-2 fixed inset-x-0 bottom-10 mx-2 flex gap-2" v-if="toolbarStore.isOpen">
    <component :is="toolbarStore.component"></component>
  </div>
</template>
