<script setup lang="ts">
import BaseButton from '../buttons/BaseButton.vue';

</script>

<template>
  <dialog open class="open:bg-[#181818]/20 backdrop-blur-md text-[#d1d2d3] w-full h-full">
    <div class="bg-[#181818]">
      <header class="flex items-center justify-between border-b border-white/20 text-2xl p-2">
        <h1>Confirm delete items</h1>
      </header>
      <main class="border-b border-white/20 p-2">
        <p class="text-lg">Do you want to delete these items?</p>
        <ul class="mt-1">
          <li>One</li>
          <li>One</li>
          <li>One</li>
        </ul>
      </main>
      <footer class="flex items-center justify-between border-b border-white/20 p-2 gap-2">
        <BaseButton class="grow">Confirm</BaseButton>
        <BaseButton button-type="danger">Cancel</BaseButton>
      </footer>
    </div>
  </dialog>
</template>
