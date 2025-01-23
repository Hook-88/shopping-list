<script setup lang="ts">
import ShoppingList from '@/components/ShoppingList/ShoppingList.vue'
import { useDialogStore } from '@/stores/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { markRaw, onMounted } from 'vue';
import AddNewItem from '@/components/Forms/AddNewItem/AddNewItem.vue';
import { useShoppingList } from '@/stores/shoppingList'
import BaseButton from '@/components/Buttons/BaseButton.vue';
import NavMenu from '@/components/Menu/NavMenu/NavMenu.vue';
import NavLink from '@/components/NavLink/NavLink.vue'
import BaseToolbar from '@/components/BaseToolbar/BaseToolbar.vue';

const dialogStore = useDialogStore()

const shoppingListStore = useShoppingList()

function handleClickAddNewItem() {
  dialogStore.open({
    component: markRaw(AddNewItem)
  })
}

onMounted(() => {
  shoppingListStore.shoppingItems = []
})


</script>

<template>

  <header class="border-b border-[#d1d2d3]/20 flex">
    <NavMenu>
      <NavLink link-to="3">Recipes</NavLink>
      <NavLink link-to="/about" class="border-none">About</NavLink>
    </NavMenu>
    <button v-if="!dialogStore.isOpen" class="px-6 ml-auto text-xl" @click="handleClickAddNewItem">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </header>


  <main class="flex-grow px-2 flex flex-col gap-4">
    <ShoppingList v-if="shoppingListStore.shoppingItems && shoppingListStore.shoppingItems.length > 0" />
    <BaseButton v-else @click="handleClickAddNewItem">Add
      new item</BaseButton>
  </main>

  <BaseToolbar />
</template>
