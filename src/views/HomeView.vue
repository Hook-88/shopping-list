<script setup lang="ts">
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.vue'
import MenuItem from '@/components/DropdownMenu/MenuItem.vue'
import BaseForm from '@/components/Forms/BaseForm.vue'
import { useDialogStore } from '@/stores/dialog'
import { computed, markRaw, onMounted } from 'vue'
import BaseList from '@/components/Lists/BaseList.vue'
import { useShoppingList } from '@/stores/shoppingList'
import { GROCERIES } from '@/data/data'
import ShoppingItem from '@/components/Lists/ShoppingList/ShoppingItem.vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
import DangerButton from '@/components/buttons/DangerButton.vue'
import { useSelectId } from '@/stores/selectId'

const dialogStore = useDialogStore()
const shoppingListStore = useShoppingList()

function handleClickNewList() {
  dialogStore.open({
    component: markRaw(BaseForm),
    title: 'Add new list'
  })
}

onMounted(() => {
  shoppingListStore.items = GROCERIES
})

const selectIdStore = useSelectId()

const noSelection = computed(() => {
  return selectIdStore.selectedIds.length === 0
})

</script>

<template>

  <header class="text-2xl text-center p-2 border-b border-[#d1d2d3]/20 grid grid-cols-6">
    <h1 class="col-start-2 col-span-4">Shopping List</h1>
    <DropdownMenu>
      <MenuItem>
      <button @click="handleClickNewList">New List</button>
      </MenuItem>
      <MenuItem>Recipes</MenuItem>
      <MenuItem>Settings</MenuItem>
    </DropdownMenu>
    <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
  </header>

  <main class="flex-grow px-2 flex flex-col gap-4">
    <BaseList :item-component="ShoppingItem" v-if="shoppingListStore.items" :list-items="shoppingListStore.items" />
    <DangerButton :disabled="noSelection">Delete Selected</DangerButton>
    <!-- <BaseButton>
      Add new item
      <FontAwesomeIcon :icon="faPlus" />
    </BaseButton> -->
  </main>
</template>
