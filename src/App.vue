<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen flex flex-col gap-2">

    <RouterView />


    <footer class="text-center p-1">
      <small>&copy; 2024 Hook-88</small>
    </footer>
    <!-- TODO ADD dialog ref to open en close -->
    <dialog open class="bg-transparent h-screen">
      <div class="backdrop backdrop-blur-sm h-full w-screen flex items-center justify-center">
        <p class="bg-[##181818] border border-[#d1d2d3]/20 rounded-sm p-4 text-[#d1d2d3]">
          here content
        </p>
      </div>
    </dialog>
  </div>


</template>
