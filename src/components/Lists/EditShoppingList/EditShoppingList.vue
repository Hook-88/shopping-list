<script setup lang="ts">
import BaseList from '@/components/Lists/BaseList.vue'
import EditShoppingItem from '@/components/Lists/EditShoppingList/EditShoppingItem.vue'
import { useShoppingList } from '@/stores/shoppingList'
import { useSelectId } from '@/stores/selectId'
import { computed, markRaw, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
import { useDialogStore } from '@/stores/dialog'
import ItemForm from '@/components/Forms/ItemForm.vue'

const shoppingListStore = useShoppingList()
const selectIdStore = useSelectId()

const noSelection = computed(() => {
  return selectIdStore.selectedIds.length === 0
})

//Open Form
const dialogStore = useDialogStore()

function handleClickEdit() {
  const item = shoppingListStore.items?.find(item => item.id === selectIdStore.selectedIds[0])

  if (!item) {
    throw new Error('No matching item')
  }

  dialogStore.open({
    component: markRaw(ItemForm),
    title: `Edit ${item.name}`,
    props: {
      itemData: {
        name: item.name,
        quantity: item.quantity,
        id: item.id
      }
    }
  })
}

const prevSelectedIds = selectIdStore.selectedIds


onMounted(() => {
  selectIdStore.deSelectAll()
})

onUnmounted(() => {
  selectIdStore.selectedIds = prevSelectedIds
})

//items to display
const displayItems = computed(() => {

  if (!shoppingListStore.items) {
    throw new Error('Shopping list has no value')
  }

  return shoppingListStore.items.filter(item => {
    if (!prevSelectedIds.some(id => id === item.id)) {
      return item
    }
  })
})

</script>

<template>
  <div class="flex flex-col">
    <header class="text-center p-0.5">
      <small class="text-sm">Select item</small>
    </header>
    <BaseList :item-component="EditShoppingItem" :list-items="displayItems" />
    <BaseButton @click="handleClickEdit" :disabled="noSelection"
      class="mt-4 disabled:bg-sky-700/40 disabled:text-white/40">
      Edit Item
    </BaseButton>
  </div>
</template>
