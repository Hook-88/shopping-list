<script setup lang="ts">
defineProps<{
  buttonType?: 'danger' | 'transparant'
}>()

</script>

<template>
  <button class="px-4 py-2 rounded-xs" :class="{
    ['bg-sky-800']: !buttonType,
    ['bg-red-900']: buttonType === 'danger',
  }" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
