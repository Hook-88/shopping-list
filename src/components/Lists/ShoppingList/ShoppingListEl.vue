<script setup lang="ts">
import BaseList from '@/components/Lists/BaseList.vue'
import ShoppingItem from '@/components/Lists/ShoppingList/ShoppingItem.vue'
import { useShoppingList } from '@/stores/shoppingList'
import { useSelectId } from '@/stores/selectId'
import { computed, ref, markRaw } from 'vue'
import DangerButton from '@/components/buttons/DangerButton.vue'
import { useDialogStore } from '@/stores/dialog'
import ConfirmButtons from '@/components/Forms/ConfirmButtons.vue'

const shoppingListStore = useShoppingList()
const selectIdStore = useSelectId()
const dialogStore = useDialogStore()

//Delete items
function handleClickDelete() {
  dialogStore.open({
    title: 'Do you want to delete',
    component: markRaw(ConfirmButtons),
    props: {
      onConfirm: handleDeleteSelection,
      onClose: dialogStore.close,
      items: selectedItemNames
    }
  })
}

const selectedItemNames = computed(() => {
  return selectIdStore.selectedIds.map(id => {
    const foundItem = shoppingListStore.items?.find(item => item.id === id)
    return foundItem?.name
  })
})

function handleDeleteSelection() {
  selectIdStore.selectedIds.forEach(id => shoppingListStore.deleteItem(id))
  selectIdStore.deSelectAll()
}

const noSelection = computed(() => {
  return selectIdStore.selectedIds.length === 0
})

//Filter items
const hasFilter = ref(false)

const filterButtonText = computed(() => {
  return hasFilter.value ? 'Show selected' : 'Hide selected'
})

function handleClickFilter() {
  hasFilter.value = !hasFilter.value
}

//items to display
const displayItems = computed(() => {

  if (!shoppingListStore.items) {
    throw new Error('Shopping list has no value')
  }
  // if filter is applied
  if (hasFilter.value) {
    return shoppingListStore.items?.filter(item => {
      if (!selectIdStore.selectedIds.some(id => id === item.id)) {
        return item
      }
    })
  }

  return shoppingListStore.items
})

//progress


</script>

<template>
  <div class="flex flex-col">
    <header class="flex items-center justify-between">
      <small class="text-sm">({{ selectIdStore.selectedIds.length }}/{{ shoppingListStore.items?.length
        }})</small>
      <button :disabled="noSelection" @click="handleClickFilter" class="text-sm p-1 disabled:text-white/40">{{
        filterButtonText
        }}</button>
    </header>
    <BaseList :item-component="ShoppingItem" :list-items="displayItems" />
    <DangerButton class="mt-4" :disabled="noSelection" @click="handleClickDelete">Delete selection
    </DangerButton>
  </div>
</template>
