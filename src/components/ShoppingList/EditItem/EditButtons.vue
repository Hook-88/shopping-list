<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMinus, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <button class="px-4 py-2">
    <FontAwesomeIcon :icon="faMinus" />
  </button>

  <button class="px-4 py-2">
    <FontAwesomeIcon :icon="faEdit" />
  </button>

  <button class="px-4 py-2">
    <FontAwesomeIcon :icon="faPlus" />
  </button>
</template>
