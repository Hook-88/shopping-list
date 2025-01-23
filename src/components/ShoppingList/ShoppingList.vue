<script setup lang="ts">
import BaseList from '@/components/BaseList/BaseList.vue'
import ShoppingItem from '@/components/ShoppingList/ShoppingItem.vue';
import { SHOPPINGLIST } from '@/data'
import { onMounted, ref } from 'vue'

interface ShoppingItem {
  name: string
  quantity: number
  label: string
  id: string
}

const shopingListItem = ref<ShoppingItem[] | null>()

onMounted(() => {
  shopingListItem.value = SHOPPINGLIST
})


</script>

<template>
  <BaseList v-if="shopingListItem" :list-items="shopingListItem" :item-component="ShoppingItem" />
  <button class="rounded border py-3 bg-red-600/50 border-[#d1d2d3]/20">Delete checked items</button>
</template>
