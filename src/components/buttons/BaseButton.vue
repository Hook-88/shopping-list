<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  buttonType?: 'danger' | 'transparant'
}>()

const buttonTypeClassName = computed(() => {
  if (!props.buttonType) {
    return 'border border-white/20 bg-sky-800'
  }

  if (props.buttonType === 'danger') {
    return 'border border-white/20 bg-red-900'
  }

  return null
})

</script>

<template>
  <button class="px-4 py-2 rounded-xs" :class="buttonTypeClassName" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
