import { defineStore } from 'pinia'
import { type ShoppingItemInterface } from '@/types/types'
import { ref } from 'vue'

export const useShoppingListStore = defineStore('shopping-list', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  function deleteMultipleItems(idArr: string[]) {
    shoppingItems.value = shoppingItems.value?.filter((shoppingItem) => {
      if (!idArr.includes(shoppingItem.id)) {
        return shoppingItem
      }
    })
  }

  return {
    shoppingItems,
    deleteMultipleItems,
  }
})
