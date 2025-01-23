import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ShoppingItem {
  name: string
  quantity: number
  label: string
  id: string
}

export const useShoppingList = defineStore('shopping-list', () => {
  const shoppingItems = ref<ShoppingItem[] | null>(null)

  function deleteItem(itemId: string) {
    if (!shoppingItems.value) {
      throw new Error('Noting to delete')
    }

    shoppingItems.value = shoppingItems.value.filter((item) => item.id !== itemId)
  }

  function addItem(itemData: { name: string; quantity: number; label: string }) {
    const newItem: ShoppingItem = {
      ...itemData,
      id: Math.random().toString(),
    }

    shoppingItems.value?.unshift(newItem)
  }

  function mutateItem(itemId: string, itemData: { name: string; quantity: number; label: string }) {
    if (!shoppingItems.value) {
      throw new Error('Noting to mutate')
    }
    shoppingItems.value = shoppingItems.value?.map((shoppingItem) => {
      if (shoppingItem.id === itemId) {
        return {
          ...shoppingItem,
          ...itemData,
        }
      }

      return shoppingItem
    })
  }

  function incrementItemQuantity(itemId: string, incementValue: number = 1) {
    if (!shoppingItems.value) {
      throw new Error('Noting to increment')
    }
    shoppingItems.value = shoppingItems.value?.map((shoppingItem) => {
      if (shoppingItem.id === itemId) {
        return {
          ...shoppingItem,
          quantity: shoppingItem.quantity + incementValue,
        }
      }

      return shoppingItem
    })
  }

  function decrementItemQuantity(itemId: string, decementValue: number = 1) {
    if (!shoppingItems.value) {
      throw new Error('Noting to decrement')
    }
    shoppingItems.value = shoppingItems.value?.map((shoppingItem) => {
      if (shoppingItem.id === itemId) {
        return {
          ...shoppingItem,
          quantity: shoppingItem.quantity - decementValue,
        }
      }

      return shoppingItem
    })
  }

  return {
    shoppingItems,
    deleteItem,
    addItem,
    mutateItem,
    incrementItemQuantity,
    decrementItemQuantity,
  }
})
