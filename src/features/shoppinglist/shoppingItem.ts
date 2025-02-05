import { useSelectIdsStore } from '@/stores/selectIds'
import { useSelectSingleIdStore } from '@/stores/selectSingleId'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircle as faCircleFill } from '@fortawesome/free-solid-svg-icons'
import { computed } from 'vue'
import { type GroceryItemInterface } from '@/types/GroceryItem'

export interface shoppingItemInterface extends GroceryItemInterface {
  isChecked: boolean
}

export const useShoppingItem = (item: shoppingItemInterface) => {
  //check item
  const selectIdsStore = useSelectIdsStore()

  const itemIdIsSelected = computed(() =>
    selectIdsStore.selectedIds.some((selectedId) => selectedId === item.id),
  )

  const itemIdIsSingleSelected = computed(() => selectSingleIdStore.selectedId === item.id)

  function handleClickItem() {
    //deselect item to edit if selected
    if (selectSingleIdStore.selectedId) {
      selectSingleIdStore.selectedId = null
      return
    }

    //check wheter to add item to selection
    if (itemIdIsSelected.value) {
      selectIdsStore.removeId(item.id)
      return
    }
    selectIdsStore.addId(item.id)
  }

  // item select to edit
  const selectSingleIdStore = useSelectSingleIdStore()

  function handleClickEditItem() {
    selectSingleIdStore.toggleSelect(item.id)
  }

  const circleIcon = computed(() => {
    if (itemIdIsSingleSelected.value) {
      return faCircleFill
    }

    return faCircle
  })

  //Classname shopipping item
  const shoppingItemClassName = computed(() => {
    //class for checked state
    if (itemIdIsSelected.value) {
      return 'flex items-center border border-white/20 rounded-xs bg-green-800'
    }

    //class for select to edit state
    if (itemIdIsSingleSelected.value) {
      return 'flex items-center border border-white/90 rounded-xs'
    }

    return 'flex items-center border border-white/20 rounded-xs'
  })

  return {
    handleClickEditItem,
    handleClickItem,
    circleIcon,
    shoppingItemClassName,
    itemIdIsSelected,
  }
}
