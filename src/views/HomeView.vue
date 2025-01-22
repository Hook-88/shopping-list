<script setup lang="ts">
import BaseList from '@/components/BaseList/BaseList.vue'
import { SHOPPINGLIST } from '@/data'
import BaseItem from '@/components/BaseList/BaseItem/BaseItem.vue';



</script>

<template>

  <header class="text-2xl text-center p-2 border-b border-[#d1d2d3]/20 grid grid-cols-6">
    <h1 class="col-start-2 col-span-4">Shopping List</h1>
    <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
  </header>


  <main class="flex-grow px-2 flex flex-col gap-4">
    <BaseList :list-items="SHOPPINGLIST" :item-component="BaseItem" />
  </main>
</template>
