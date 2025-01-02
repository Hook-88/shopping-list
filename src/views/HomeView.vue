<script setup lang="ts">
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.vue'
import MenuItem from '@/components/DropdownMenu/MenuItem.vue'
import ItemForm from '@/components/Forms/ItemForm.vue'
import { useDialogStore } from '@/stores/dialog'
import { computed, markRaw, onMounted } from 'vue'
import BaseList from '@/components/Lists/BaseList.vue'
import { useShoppingList } from '@/stores/shoppingList'
import ShoppingItem from '@/components/Lists/ShoppingList/ShoppingItem.vue'
import DangerButton from '@/components/buttons/DangerButton.vue'
import { useSelectId } from '@/stores/selectId'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import BaseButton from '@/components/buttons/BaseButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const shoppingListStore = useShoppingList()

const dialogStore = useDialogStore()

function handleClickNewItem() {
  dialogStore.open({
    component: markRaw(ItemForm),
    title: 'Add new item'
  })
}

onMounted(() => {
  // shoppingListStore.items = GROCERIES
})

const selectIdStore = useSelectId()

const noSelection = computed(() => {
  return selectIdStore.selectedIds.length === 0
})

//Delete items
function handleClickDelete() {
  selectIdStore.selectedIds.forEach(id => shoppingListStore.deleteItem(id))
  selectIdStore.deSelectAll()

}

</script>

<template>

  <header class="text-2xl text-center p-2 border-b border-[#d1d2d3]/20 grid grid-cols-6">
    <h1 class="col-start-2 col-span-4">Shopping List</h1>
    <DropdownMenu>
      <MenuItem>
      <button @click="handleClickNewItem">Add item</button>
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
    <DangerButton v-if="shoppingListStore.items" :disabled="noSelection" @click="handleClickDelete">Delete Selected
    </DangerButton>
    <BaseButton v-else @click="handleClickNewItem">
      Add item
      <FontAwesomeIcon :icon="faPlus" />
    </BaseButton>
  </main>
</template>
