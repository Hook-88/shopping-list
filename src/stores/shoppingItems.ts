import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ShoppingItemInterface {
  name: string
  id: string
  quantity: number
  unit: string
  label: string
}

export const useShoppingItemsStore = defineStore('shopping-items-store', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  return {
    shoppingItems,
  }
})
