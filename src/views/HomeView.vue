<script setup lang="ts">
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
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
  </header>
  <main class="grow">

  </main>

</template>
