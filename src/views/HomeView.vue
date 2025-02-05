<script setup lang="ts">
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'
import MainNav from '@/components/main-nav/MainNav.vue'
import { GROCERYITEMS } from '@/data/shoppingList';
import ShoppingList from '@/features/shoppinglist/ShoppingList.vue';

</script>

<template>
  <header class="flex items-center justify-between border-b border-white/20">
    <MainNav />
    <button class="px-4">
      <FontAwesomeIcon :icon="faPlus" class="text-2xl" />
    </button>
  </header>
  <main class="flex-grow px-2 flex flex-col">
    <ShoppingList :shopping-items="GROCERYITEMS" />
    <!-- <BaseButton>Add item</BaseButton> -->
    <!-- <BaseList :list-data="GROCERYITEMS" :list-component="ShoppingItem" /> -->
  </main>
</template>
