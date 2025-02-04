<script setup lang="ts">
import { faAngleRight, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="flex justify-between border-b border-white/20">
    <button class="p-2 text-2xl tracking-wider" popovertarget="nav-menu">
      Lista de compras
      <FontAwesomeIcon :icon="faCaretDown" />
    </button>
    <nav id="nav-menu" popover
      class="text-2xl mt-12.5 open:grid open:w-full bg-[#181818] text-[#d1d2d3] tracking-wider">
      <RouterLink class="p-2 border-b border-white/20 flex items-center justify-between" to="#">
        Recipes
        <FontAwesomeIcon :icon="faAngleRight" class="mr-2 text-xl" />
      </RouterLink>
      <RouterLink class="p-2 border-b border-white/20 flex items-center justify-between" :to="{ name: 'about' }">
        About
        <FontAwesomeIcon :icon="faAngleRight" class="mr-2 text-xl" />
      </RouterLink>
    </nav>
    <button class="px-4">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </header>
  <main class="grow">
    <h1>This is the homepage</h1>

  </main>
</template>
