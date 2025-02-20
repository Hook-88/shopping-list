import { defineStore } from 'pinia'
import { type ShoppingItemInterface, type ItemNoId } from '@/types/types'
import { ref } from 'vue'
import { v4 as uuidV4 } from 'uuid'

export const useShoppingListStore = defineStore('shopping-list', () => {
  const shoppingItems = ref<ShoppingItemInterface[] | null>()

  function deleteMultipleItems(idArr: string[]) {
    shoppingItems.value = shoppingItems.value?.filter((shoppingItem) => {
      if (!idArr.includes(shoppingItem.id)) {
        return shoppingItem
      }
    })
  }

  function addNewItem(itemObj: ItemNoId) {
    const itemObjWithId = {
      ...itemObj,
      id: uuidV4(),
    }

    shoppingItems.value?.push(itemObjWithId)
  }

  return {
    shoppingItems,
    deleteMultipleItems,
    addNewItem,
  }
})
