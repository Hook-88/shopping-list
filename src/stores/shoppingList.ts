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

  return {
    shoppingItems,
    deleteItem,
    addItem,
  }
})
