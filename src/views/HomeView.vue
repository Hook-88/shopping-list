<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.vue'
import MenuItem from '@/components/DropdownMenu/MenuItem.vue'
import BaseForm from '@/components/Forms/BaseForm.vue'
import { useDialogStore } from '@/stores/dialog'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { markRaw, onMounted } from 'vue'
import BaseList from '@/components/Lists/BaseList.vue'
import BaseItem from '@/components/Lists/BaseItem.vue'
import { useShoppingList } from '@/stores/shoppingList'
import { GROCERIES } from '@/data/data'

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

  <main class="flex-grow px-2 flex flex-col">
    <BaseList :item-component="BaseItem" v-if="shoppingListStore.items" :list-items="shoppingListStore.items" />
    <!-- <BaseButton>
      Add new item
      <FontAwesomeIcon :icon="faPlus" />
    </BaseButton> -->
  </main>
</template>
