<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="h-screen flex flex-col gap-2">

    <RouterView />
    <footer class="text-center p-1">
      <small>&copy; 2024 Hook-88</small>
    </footer>
  </div>

</template>
