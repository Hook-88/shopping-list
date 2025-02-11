<script setup lang="ts">
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';
import MainNav from '@/components/main-nav/MainNav.vue';

</script>


<template>
  <header class="text-2xl tracking-wider font-bold border-b border-ash/20 flex justify-between">
    <MainNav />
    <button class=" py-1.5 px-2">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </header>
  <main class="grow">

  </main>
</template>
