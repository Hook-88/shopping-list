<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
</script>

<template>
  <div class="relative grid">
    <button class="flex items-center justify-end pr-2">
      <FontAwesomeIcon :icon="faBars" />
    </button>
    <ul class="
          absolute text-xl text-nowrap
          border border-[#d1d2d3]/20 rounded-sm
          right-1 top-9
          backdrop backdrop-blur-sm
        ">
      <li class="px-4 py-2 border-b border-[#d1d2d3]/20">New List</li>
      <li class="px-4 py-2 border-b border-[#d1d2d3]/20">Recipes</li>
      <li class="px-4 py-2">Settings</li>
    </ul>
  </div>
</template>
