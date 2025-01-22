<script setup lang="ts">
import BaseList from '@/components/BaseList/BaseList.vue'
import ShoppingItem from '@/components/ShoppingList/ShoppingItem.vue';
import { SHOPPINGLIST } from '@/data'

</script>

<template>
  <BaseList :list-items="SHOPPINGLIST" :item-component="ShoppingItem" />
</template>
