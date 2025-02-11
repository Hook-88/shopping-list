<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from 'vue-router'

</script>

<template>
  <button class="flex items-center gap-1.5 py-1.5 px-2" popovertarget="main-nav">
    <h1>Shopping list</h1>
    <FontAwesomeIcon :icon="faCaretDown" />
  </button>
  <nav popover id="main-nav" class="open:flex open:flex-col mt-11 min-w-full bg-obsidian text-ash tracking-wider">
    <RouterLink to="/recipes" class="px-2 py-1.5 border-y border-ash/20">Recipes</RouterLink>
    <RouterLink :to="{
      name: 'about'
    }" class="px-2 py-1.5 border-b border-ash/20">About</RouterLink>
  </nav>

</template>
