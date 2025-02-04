<script setup lang="ts">
import BaseList from '@/components/list/BaseList.vue'
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';

defineProps<{
  shoppingItems: GroceryItemInterface[]
}>()
</script>

<template>
  <div>
    <header>
      <button>
        (4/{{ shoppingItems.length }})
      </button>
    </header>
    <BaseList :list-data="shoppingItems" :list-component="ShoppingItem" />
  </div>
</template>
