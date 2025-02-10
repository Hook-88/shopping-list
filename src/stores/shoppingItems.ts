import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export interface ShoppingItemInterface {
  name: string
  id: string
  quantity: number
  unit: string
  label: string
}

export type ShoppingItemNoId = Omit<ShoppingItemInterface, 'id'>

export const useShoppingItemsStore = defineStore('shopping-items-store', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  //delete item
  function deleteItem(itemId: string) {
    if (!shoppingItems.value) {
      throw new Error('Nothing to delete, shoppingitems is undefined')
    }

    shoppingItems.value = shoppingItems.value.filter((item) => item.id !== itemId)
  }

  //delete selection
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

  //add new item
  function addNewItem(item: ShoppingItemNoId) {
    const shoppingItem: ShoppingItemInterface = {
      ...item,
      id: uuidv4(),
    }

    shoppingItems.value?.unshift(shoppingItem)
  }

  return {
    shoppingItems,
    deleteSelection,
    deleteItem,
    addNewItem,
  }
})
