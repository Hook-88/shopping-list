import { useShoppingItemsStore } from '@/stores/shoppingItems'
import { useSelectMultipleIds } from '../select-multiple-ids/useSelectMultipleIds'
import { useSelectSingleId } from '../select-single-id/useSelectSingleId'
import { useDialogStore } from '@/stores/dialog'
import { markRaw } from 'vue'
import ConfirmDelete from '../confirm-delete-items/ConfirmDelete.vue'
import { computed } from 'vue'
import { useFilter } from '../filter/useFilter'

export const useShoppingList = () => {
  //Check items
  const { selectedIds, toggleSelectId, clearAll } = useSelectMultipleIds()

  function itemIsChecked(id: string) {
    return selectedIds.value.includes(id)
  }

  function handleOnToggleCheck(itemId: string) {
    if (selectedId.value) {
      clearSelection()
      return
    }
    toggleSelectId(itemId)
  }

  //Select item to edit
  const { toggleSelect, selectedId, clearSelection } = useSelectSingleId()
  function itemIsSelectedToEdit(id: string) {
    return selectedId.value === id
  }

  function handleOnEditItem(itemId: string) {
    toggleSelect(itemId)
  }

  //Delete items
  const shoppingItemsStore = useShoppingItemsStore()
  const dialogStore = useDialogStore()

  function handleClickDeleteItems() {
    const itemsChecked = shoppingItemsStore.shoppingItems?.filter((shoppingItem) =>
      selectedIds.value.includes(shoppingItem.id),
    )

    dialogStore.open({
      title: 'Delete items',
      component: markRaw(ConfirmDelete),
      props: {
        handleDelete: deleteCheckedItems,
        itemsToDelete: itemsChecked?.map((shoppingItem) => shoppingItem.name),
      },
    })
  }

  function deleteCheckedItems() {
    shoppingItemsStore.deleteSelection(selectedIds.value)
    clearAll()
  }

  //List progress
  const listProgressButtonText = computed(() => {
    if (!shoppingItemsStore.shoppingItems) {
      throw new Error('shopping items is null, no progress to show')
    }

    if (selectedIds.value.length === shoppingItemsStore.shoppingItems.length) {
      return `(${selectedIds.value.length}/${shoppingItemsStore.shoppingItems.length}) - completed`
    }

    return `(${selectedIds.value.length}/${shoppingItemsStore.shoppingItems.length})`
  })

  const allItemsChecked = computed(() => {
    if (!shoppingItemsStore.shoppingItems) {
      throw new Error('Shopping items is null')
    }

    return selectedIds.value.length === shoppingItemsStore.shoppingItems.length
  })

  //Filter
  const { filter, toggleFilter } = useFilter()

  //filter checked button text
  const filterButtonText = computed(() => {
    if (filter.value === 'checked') {
      return 'Show checked'
    }

    return 'Hide checked'
  })

  const noItemsChecked = computed(() => selectedIds.value.length === 0)

  //items to display
  const displayItems = computed(() => {
    if (filter.value === 'checked') {
      return shoppingItemsStore.shoppingItems?.filter(
        (shoppingItem) => !itemIsChecked(shoppingItem.id),
      )
    }

    return shoppingItemsStore.shoppingItems
  })

  return {
    itemIsChecked,
    handleOnToggleCheck,
    itemIsSelectedToEdit,
    handleOnEditItem,
    handleClickDeleteItems,
    listProgressButtonText,
    allItemsChecked,
    toggleFilter,
    filterButtonText,
    noItemsChecked,
    displayItems,
  }
}
