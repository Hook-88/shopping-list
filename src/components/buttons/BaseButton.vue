<script setup lang="ts">
import { computed } from 'vue';


interface Props {
  buttonType?: 'action'
}

const props = defineProps<Props>()

const buttonTypeClass = computed(() => {
  if (props.buttonType === 'action') {
    return 'bg-sky-800 border border-ash/20'
  }

  return null
})

</script>

<template>
  <button v-bind="$attrs" class="px-2 py-1.5 rounded-xs" :class="buttonTypeClass">
    <slot></slot>
  </button>
</template>
