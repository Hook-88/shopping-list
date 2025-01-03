<script setup lang="ts">
import BaseList from '@/components/Lists/BaseList.vue'
import EditShoppingItem from '@/components/Lists/EditShoppingList/EditShoppingItem.vue'
import { useShoppingList } from '@/stores/shoppingList'
import { useSelectId } from '@/stores/selectId'
import { computed, markRaw } from 'vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
import { useDialogStore } from '@/stores/dialog'
import ItemForm from '@/components/Forms/ItemForm.vue'

const shoppingListStore = useShoppingList()
const selectIdStore = useSelectId()

const noSelection = computed(() => {
  return selectIdStore.selectedIds.length === 0
})

//items to display
const displayItems = computed(() => {

  if (!shoppingListStore.items) {
    throw new Error('Shopping list has no value')
  }

  return shoppingListStore.items
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

</script>

<template>
  <div class="flex flex-col">
    <header class="text-center">
      <small class="sm p-1">Select item</small>
    </header>
    <BaseList :item-component="EditShoppingItem" :list-items="displayItems" />
    <BaseButton @click="handleClickEdit" :disabled="noSelection"
      class="mt-4 disabled:bg-sky-700/40 disabled:text-white/40">
      Edit Item
    </BaseButton>
  </div>
</template>
