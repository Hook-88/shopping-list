<script setup lang="ts">
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';


</script>


<template>
  <header class="text-2xl tracking-wider font-bold border-b border-ash/20 flex justify-between">
    <button class="flex items-center gap-1.5 py-1.5 px-2" popovertarget="main-nav">
      <h1>Shopping list</h1>
      <FontAwesomeIcon :icon="faCaretDown" />
    </button>
    <button class="py-1.5 px-2">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
    <nav popover id="main-nav" class="open:flex open:flex-col mt-11 min-w-full bg-sky-950/50 text-ash tracking-wider">
      <RouterLink to="/recipes" class="px-2 py-1.5 border-b border-ash/20">Recipes</RouterLink>
      <RouterLink :to="{
        name: 'about'
      }" class="px-2 py-1.5 border-b border-ash/20">About</RouterLink>
    </nav>
  </header>
  <main class="grow">

  </main>
</template>
