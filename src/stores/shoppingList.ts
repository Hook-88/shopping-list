import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

interface Item {
  name: string
  id: string
  quantity: number
}

interface NewItem {
  name: string
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

  function addItem(itemObj: NewItem) {
    if (!items.value || items.value.length === 0) {
      throw new Error('no items to mutate')
    }

    const newItem: Item = {
      name: itemObj.name,
      quantity: itemObj.quantity,
      id: uuid(),
    }

    items.value.unshift(newItem)
  }

  return {
    items,
    mutateQuantity,
    deleteItem,
    addItem,
  }
})
