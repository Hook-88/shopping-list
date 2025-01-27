<script setup lang="ts">
import BaseList from '@/components/BaseList/BaseList.vue'
import ShoppingItem from '@/components/ShoppingList/ShoppingItem.vue';
import { useShoppingList } from '@/stores/shoppingList';
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSelectId } from '@/stores/selectId';
import FilterButton from '../Buttons/FilterButton.vue';

const shoppingListStore = useShoppingList()
const { shoppingItems } = storeToRefs(shoppingListStore)

const selectIdStore = useSelectId()

function handleClickDelete() {
  if (!shoppingListStore.shoppingItems) {
    throw new Error('No items to delete')
  }

  selectIdStore.selectedIds.forEach(selectedId => shoppingListStore.deleteItem(selectedId))
  selectIdStore.clearSelection()
}

const noItemsSelected = computed(() => {
  return selectIdStore.selectedIds.length === 0
})

const listIsCompleted = computed(() => {
  return selectIdStore.selectedIds.length === shoppingItems.value?.length
})

function handleClickCompleted() {
  if (!listIsCompleted.value) {
    return
  }

  handleClickDelete()
}

const applyFilter = ref(false)

function toggleFilter() {
  applyFilter.value = !applyFilter.value
}

const filteredItems = computed(() => {
  if (!shoppingListStore.shoppingItems) {
    throw new Error('shopping items is undefined')
  }

  return shoppingListStore.shoppingItems.filter(shoppingItem => {

    const shoppingItemIsSelected = selectIdStore.selectedIds.some(id => id === shoppingItem.id)

    return shoppingItemIsSelected === false
  })
})

const itemsToDisplay = computed(() => {
  return applyFilter.value ? filteredItems.value : shoppingListStore.shoppingItems
})

const filterButtonText = computed(() => {
  return applyFilter.value ? 'Show checked' : 'Hide checked'
})

//labels
const someItemsHaveLabel = computed(() => {
  return labelArray.value.length > 0
})

const labelArray = computed(() => {
  if (!shoppingListStore.shoppingItems) {
    throw new Error('shopping items is undefined')
  }

  const filterArr = shoppingListStore.shoppingItems.filter(shoppingItems => shoppingItems.label.length > 0)

  return filterArr.map(item => item.label)
})


</script>

<template>
  <div>
    <header>
      <div class="flex items-center justify-end gap-1" v-if="someItemsHaveLabel">
        <FilterButton>All</FilterButton>
        <FilterButton v-for="(label, index) in labelArray" :key="index">{{ label }}</FilterButton>
      </div>
      <div class="text-sm flex items-end justify-between">
        <h5 class="mb-1" @click="handleClickCompleted">
          ({{ selectIdStore.selectedIds.length }}/{{ shoppingItems?.length }})
          <span v-if="listIsCompleted">- Completed</span>
        </h5>
        <button class="px-2 pt-2 pb-1" @click="toggleFilter">{{ filterButtonText }}</button>
      </div>
    </header>
    <BaseList v-if="shoppingListStore.shoppingItems" :list-items="itemsToDisplay!" :item-component="ShoppingItem" />
  </div>
  <button class="rounded border py-3 bg-red-600/50 border-[#d1d2d3]/20 disabled:bg-red-800/30 disabled:text-white/40"
    @click="handleClickDelete" :disabled="noItemsSelected">
    Clear checked items
  </button>
</template>
