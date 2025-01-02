import { defineStore } from 'pinia'
import { ref } from 'vue'
import { GROCERIES } from '@/data/data'

interface Item {
  name: string
  id: string
  quantity: number
}

export const useShoppingList = defineStore('shopping-list', () => {
  const items = ref<Item[] | null>(GROCERIES)

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

      default:
        break
    }
  }

  return {
    items,
    mutateQuantity,
  }
})
