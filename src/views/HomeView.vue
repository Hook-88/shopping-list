<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

</script>

<template>

  <header class="text-2xl text-center p-2 border-b border-[#d1d2d3]/20 grid grid-cols-6">
    <h1 class="col-start-2 col-span-4">Shopping List</h1>
    <button class="flex items-center justify-end pr-2">
      <FontAwesomeIcon :icon="faBars" />
    </button>

    <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
  </header>

  <main class="flex-grow px-2 flex flex-col">
    <button class="bg-sky-600 py-2 px-4 rounded">Add new list &plus;</button>

  </main>
</template>
