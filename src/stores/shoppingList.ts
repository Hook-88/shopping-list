import { defineStore } from 'pinia'
import { type ShoppingItemInterface } from '@/types/types'
import { ref } from 'vue'

export const useShoppingListStore = defineStore('shopping-list', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  return {
    shoppingItems,
  }
})
