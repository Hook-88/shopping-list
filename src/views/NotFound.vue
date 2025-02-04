<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <main class="grow px-2 flex flex-col gap-4 items-center">
    <h1 class="text-center py-2 text-xl font-bold">Oops!</h1>
    <p>The page you're looking for does not exist.</p>
    <RouterLink class="text-center text-blue-600 border-b border-blue-600" :to="{ name: 'Home' }">
      <FontAwesomeIcon :icon="faArrowLeftLong" />
      Back to home

    </RouterLink>
  </main>
</template>
