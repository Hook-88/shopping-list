import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type ShoppingItemInterface } from '@/types/types'
import { v4 as uuidV4 } from 'uuid'

export type itemWithoutId = Omit<ShoppingItemInterface, 'id'>

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

  function mutateItemQuantity(mutateObj: { itemId: string; mutateFactor: number }) {
    shoppingItems.value = shoppingItems.value?.map((shoppingItem) => {
      if (shoppingItem.id === mutateObj.itemId) {
        return {
          ...shoppingItem,
          quantity: Number(shoppingItem.quantity) + mutateObj.mutateFactor,
        }
      }

      return shoppingItem
    })
  }

  function getShoppingItem(itemId: string) {
    return shoppingItems.value?.find((shoppingItem) => shoppingItem.id === itemId)
  }

  function replaceItem(itemId: string, newObj: itemWithoutId) {
    shoppingItems.value = shoppingItems.value?.map((shoppingItem) => {
      if (shoppingItem.id === itemId) {
        return {
          ...newObj,
          id: shoppingItem.id,
        }
      }

      return shoppingItem
    })
  }

  return {
    shoppingItems,
    getShoppingItem,
    deleteItem,
    deleteMultipleItems,
    addNewItem,
    mutateItemQuantity,
    replaceItem,
  }
})
