<script setup lang="ts">
import ShoppingList from '@/components/ShoppingList/ShoppingList.vue';



</script>

<template>
  <header class="flex items-center justify-between border-b border-white/20">
    <MainNav />
    <button class="px-4">
      <FontAwesomeIcon :icon="faPlus" class="text-2xl" />
    </button>
  </header>
  <main class="flex-grow px-2 flex flex-col">
    <!-- <BaseButton>Add item</BaseButton> -->
    <BaseList :list-data="GROCERYITEMS" :list-component="ShoppingItem" />
  </main>
</template>
