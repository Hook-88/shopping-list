import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Item {
  name: string
  id: string
  quantity: number
}

export const useShoppingList = defineStore('shopping-list', () => {
  const items = ref<Item[] | null>(null)

  function mutateQuantity(id: string, action: 'increment' | 'decrement') {
    //check if items has a value and is longer than 1
    if (!items.value || items.value.length === 0) {
      throw new Error('no items to mutate')
    }

    switch (action) {
      case 'increment':
        items.value = items.value?.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }

          return item
        })

        break

      case 'decrement':
        items.value = items.value?.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }

          return item
        })

        break
    }
  }

  function deleteItem(itemId: string) {
    if (!items.value || items.value.length === 0) {
      throw new Error('no items to mutate')
    }

    items.value = items.value?.filter((item) => item.id !== itemId)
  }

  return {
    items,
    mutateQuantity,
    deleteItem,
  }
})
