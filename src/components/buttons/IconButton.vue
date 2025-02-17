<script setup lang="ts">
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
  iconDef: IconDefinition
}>()

</script>

<template>
  <button class="p-2">
    <FontAwesomeIcon :icon="iconDef" />
  </button>
</template>
