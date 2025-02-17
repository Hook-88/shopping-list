<script setup lang="ts">
import { faAngleRight, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



</script>


<template>
  <header class="text-2xl tracking-wider border-b border-ash/20 flex justify-between">
    <button class="p-2">
      Shopping List
      <FontAwesomeIcon :icon="faCaretDown" />
    </button>

    <button class="p-2">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
    <nav class="flex flex-col mt-12.5 min-w-screen bg-obsidian text-ash text-lg" popover>
      <RouterLink to="/recipes" class="border-b border-ash/20 p-2 flex items-center justify-between">
        Recipes
        <FontAwesomeIcon :icon="faAngleRight" class="mr-1.5" />
      </RouterLink>
      <RouterLink to="/about" class="border-b border-ash/20 p-2 flex items-center justify-between">
        About
        <FontAwesomeIcon :icon="faAngleRight" class="mr-1.5" />
      </RouterLink>
    </nav>

  </header>
  <main class="grow">

  </main>

</template>
