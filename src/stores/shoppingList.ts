import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type ShoppingItemInterface } from '@/types/types'

export const useShoppingListStore = defineStore('shopping-list-store', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  function deleteMultipleItems(itemIds: string[]) {
    shoppingItems.value = shoppingItems.value?.filter((item) => {
      if (!itemIds.includes(item.id)) {
        return item
      }
    })
  }

  return {
    shoppingItems,
    deleteMultipleItems,
  }
})
