import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type ShoppingItemInterface } from '@/types/types'

export const useShoppingListStore = defineStore('shopping-list-store', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  return {
    shoppingItems,
  }
})
