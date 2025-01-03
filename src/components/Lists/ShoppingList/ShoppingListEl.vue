<script setup lang="ts">
import BaseList from '@/components/Lists/BaseList.vue'
import ShoppingItem from '@/components/Lists/ShoppingList/ShoppingItem.vue'
import { useShoppingList } from '@/stores/shoppingList'
import { useSelectId } from '@/stores/selectId'
import { computed } from 'vue'
import DangerButton from '@/components/buttons/DangerButton.vue'

const shoppingListStore = useShoppingList()
const selectIdStore = useSelectId()

//Delete items
function handleClickDelete() {
  selectIdStore.selectedIds.forEach(id => shoppingListStore.deleteItem(id))
  selectIdStore.deSelectAll()
}

const noSelection = computed(() => {
  return selectIdStore.selectedIds.length === 0
})

</script>

<template>
  <div class="flex flex-col" v-if="shoppingListStore.items && shoppingListStore.items.length > 0">
    <header>
      <small>({{ selectIdStore.selectedIds.length }}/{{ shoppingListStore.items?.length }})</small>
    </header>
    <BaseList :item-component="ShoppingItem" :list-items="shoppingListStore.items" />
    <DangerButton class="mt-4" :disabled="noSelection" @click="handleClickDelete">Delete Selected
    </DangerButton>
  </div>
</template>
