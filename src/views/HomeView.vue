<script setup lang="ts">
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="py-2 flex justify-between border-b border-white/20">
    <button class="px-2 text-2xl font-semibold tracking-wider" popovertarget="nav-menu">
      Lista de compras
      <FontAwesomeIcon :icon="faCaretDown" />
    </button>
    <nav id="nav-menu" popover class="open:bg-sky-600">
      <RouterLink to="#">Recipes</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </nav>
    <button class="px-4">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </header>
  <main class="flex-grow">
    <h1>This is the homepage</h1>

  </main>
</template>
