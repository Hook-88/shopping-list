<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const props = defineProps<{
  to: string
}>()

</script>

<template>
  <RouterLink :to="props.to" class="border-b border-ash/20 p-2 flex items-center justify-between">
    <slot></slot>
    <FontAwesomeIcon :icon="faAngleRight" class="mr-1.5" />
  </RouterLink>
</template>
