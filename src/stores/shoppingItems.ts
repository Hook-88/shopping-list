import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ShoppingItemInterface {
  name: string
  id: string
  quantity: number
  unit: string
  label: string
}

export const useShoppingItemsStore = defineStore('shopping-items-store', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  function deleteSelection(selectedIds: string[]) {
    if (!shoppingItems.value) {
      throw new Error('Nothing to delete, shoppingitems is undefined')
    }

    shoppingItems.value = shoppingItems.value.filter((shoppingItem) => {
      if (!selectedIds.includes(shoppingItem.id)) {
        return shoppingItem
      }
    })
  }

  return {
    shoppingItems,
    deleteSelection,
  }
})
