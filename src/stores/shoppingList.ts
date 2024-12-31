import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Item {
  name: string
  id: string
  quantity: number
}

export const useShoppingList = defineStore('shopping-list', () => {
  const items = ref<Item[] | null>()

  return {
    items,
  }
})
