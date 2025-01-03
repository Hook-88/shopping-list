<script setup lang="ts">
import BaseList from '@/components/Lists/BaseList.vue'
import ShoppingItem from '@/components/Lists/ShoppingList/ShoppingItem.vue'
import EditShoppingItem from '@/components/Lists/EditShoppingList/EditShoppingItem.vue'
import { useShoppingList } from '@/stores/shoppingList'
import { useSelectId } from '@/stores/selectId'
import { computed, ref } from 'vue'
import BaseButton from '@/components/buttons/BaseButton.vue'

const shoppingListStore = useShoppingList()
const selectIdStore = useSelectId()

const noSelection = computed(() => {
  return selectIdStore.selectedIds.length === 0
})



//items to display
const displayItems = computed(() => {

  if (!shoppingListStore.items) {
    throw new Error('Shopping list has no value')
  }

  // if (hasFilter.value) {
  //   return shoppingListStore.items?.filter(item => {
  //     if (!selectIdStore.selectedIds.some(id => id === item.id)) {
  //       return item
  //     }
  //   })
  // }

  return shoppingListStore.items
})

</script>

<template>
  <div class="flex flex-col">
    <header class="text-center">
      <small class="sm p-1">Select item</small>
    </header>
    <BaseList :item-component="EditShoppingItem" :list-items="displayItems" />
    <BaseButton class="mt-4">
      Edit Item
    </BaseButton>
  </div>
</template>
