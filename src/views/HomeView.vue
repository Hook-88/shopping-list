<script setup lang="ts">
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <header class="py-2 flex justify-between border-b border-white/20">
    <button class="px-2 text-2xl font-semibold tracking-wider">
      Lista de compras
      <FontAwesomeIcon :icon="faCaretDown" />
    </button>
    <button class="px-4">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </header>
  <main class="flex-grow">
    <h1>This is the homepage</h1>

  </main>
</template>
