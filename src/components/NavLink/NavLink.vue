<script setup lang="ts">
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'

defineProps<{
  linkTo: string
}>()

</script>

<template>
  <RouterLink class="py-2 px-4 border-b border-[#d1d2d3]/20 flex items-center justify-between tracking-wide"
    :to="linkTo">
    <slot></slot>
    <FontAwesomeIcon :icon="faCaretRight" />
  </RouterLink>
</template>
