<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="text-2xl text-center p-2 border-b border-[#d1d2d3]/20">
      <h1>Shopping List</h1>

      <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
    </header>

    <main class="flex-grow">
      <RouterView />

    </main>

    <footer class="text-center p-1">
      <small>&copy; 2024 Hook-88</small>
    </footer>

  </div>

</template>
