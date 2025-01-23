<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="h-screen flex flex-col gap-2">

    <RouterView />
    <dialog open class="mt-11 w-full bg-[#1c1c1c] border-t border-b border-[#d1d2d3]/20">
      <form class="text-[#d1d2d3] px-4 flex flex-col py-2 gap-3 pb-4">
        <div>
          <label>Name:</label>
          <br />
          <input type="text" placeholder="working..."
            class="w-full px-2 py-1 rounded border border-[#d1d2d3]/20 bg-transparent">
        </div>

        <div>
          <label>Quantity:</label>
          <br />
          <input type="number" placeholder="quantity...."
            class="w-full px-2 py-1 rounded border border-[#d1d2d3]/20 bg-transparent">
        </div>

        <div>
          <label>Label:</label>
          <br />
          <input type="text" placeholder="label...."
            class="w-full px-2 py-1 rounded border border-[#d1d2d3]/20 bg-transparent">
        </div>

        <div class="flex gap-2 mt-2">
          <button class="flex-grow bg-green-800 py-2 px-4">Add item</button>
          <button class="bg-red-800 py-2 px-4">Cancel</button>
        </div>
      </form>
    </dialog>



    <footer class="text-center p-1">
      <small>&copy; 2024 Hook-88</small>
    </footer>
  </div>

</template>
