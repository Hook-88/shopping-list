<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="h-screen flex flex-col gap-2">

    <RouterView />
    <dialog open class="mt-11 w-full bg-[#1c1c1c] border-t border-b border-[#d1d2d3]/20">
      <form>
        <input type="text" placeholder="working...">
      </form>
    </dialog>
    <footer class="text-center p-1">
      <small>&copy; 2024 Hook-88</small>
    </footer>
  </div>

</template>
