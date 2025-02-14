import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type ShoppingItemInterface } from '@/types/types'
import { v4 as uuidV4 } from 'uuid'

type itemWithoutId = Omit<ShoppingItemInterface, 'id'>

export const useShoppingListStore = defineStore('shopping-list-store', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  function deleteItem(itemId: string) {
    shoppingItems.value = shoppingItems.value?.filter((shoppingItem) => shoppingItem.id !== itemId)
  }

  function deleteMultipleItems(itemIds: string[]) {
    shoppingItems.value = shoppingItems.value?.filter((item) => {
      if (!itemIds.includes(item.id)) {
        return item
      }
    })
  }

  function addNewItem(itemObj: itemWithoutId) {
    const obj = {
      ...itemObj,
      id: uuidV4(),
    }

    shoppingItems.value?.unshift(obj)
  }

  return {
    shoppingItems,
    deleteItem,
    deleteMultipleItems,
    addNewItem,
  }
})
