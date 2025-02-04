<script setup lang="ts">
import { faAngleRight, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'
import MainNav from '@/components/main-nav/MainNav.vue'

</script>

<template>
  <header class="flex justify-between border-b border-white/20">
    <MainNav />
    <button class="px-4">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </header>
  <main class="grow">
    <h1>This is the homepage</h1>

  </main>
</template>
