<script setup lang="ts">
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.vue'
import MenuItem from '@/components/DropdownMenu/MenuItem.vue'
import ItemForm from '@/components/Forms/ItemForm.vue'
import { useDialogStore } from '@/stores/dialog'
import { markRaw } from 'vue'
import { useShoppingList } from '@/stores/shoppingList'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import BaseButton from '@/components/buttons/BaseButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ShoppingListEl from '@/components/Lists/ShoppingList/ShoppingListEl.vue'

const shoppingListStore = useShoppingList()

const dialogStore = useDialogStore()

function handleClickNewItem() {
  dialogStore.open({
    component: markRaw(ItemForm),
    title: 'Add new item'
  })
}

</script>

<template>

  <header class="text-2xl text-center p-2 border-b border-[#d1d2d3]/20 grid grid-cols-6">
    <h1 class="col-start-2 col-span-4">Shopping List</h1>
    <DropdownMenu>
      <MenuItem>
      <button class="text-right" @click="handleClickNewItem">Add item</button>
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
    <ShoppingListEl v-if="shoppingListStore.items && shoppingListStore.items.length > 0" />
    <BaseButton @click="handleClickNewItem" v-else>
      Add item
      <FontAwesomeIcon :icon="faPlus" />
    </BaseButton>
  </main>
</template>
