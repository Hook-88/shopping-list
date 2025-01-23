<script setup lang="ts">
import ShoppingList from '@/components/ShoppingList/ShoppingList.vue'
import { faCaretDown, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



</script>

<template>

  <header class="border-b border-[#d1d2d3]/20 flex">
    <button class="py-2 px-4 text-2xl text-left flex items-center gap-2" popovertarget="mypopover">
      Shopping List
      <FontAwesomeIcon :icon="faCaretDown" class="text-xl" />
    </button>
    <nav id="mypopover" popover class="border-b border-t border-[#d1d2d3]/20 p-0">
      <RouterLink class="py-1 px-4 border-b border-[#d1d2d3]/20 flex items-center justify-between" to="#">
        Recipes
        <FontAwesomeIcon :icon="faCaretRight" />
      </RouterLink>
      <RouterLink class="py-1 px-4 border-b border-[#d1d2d3]/20 flex items-center justify-between" to="/about">
        About
        <FontAwesomeIcon :icon="faCaretRight" />
      </RouterLink>
    </nav>

    <button class="px-6 ml-auto text-xl">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </header>


  <main class="flex-grow px-2 flex flex-col gap-4">
    <ShoppingList />
  </main>
</template>

<style scoped>
:popover-open {
  width: 100%;
  position: absolute;
  /* inset: unset; */
  display: flex;
  flex-direction: column;
  top: 3rem;
  margin: 0;
  background-color: #181818;
  color: #d1d2d3;
  font-size: 1.5rem;
}
</style>
