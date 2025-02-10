<script setup lang="ts">
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'
import MainNav from '@/components/main-nav/MainNav.vue'
import ShoppingList from '@/features/shoppinglist/ShoppingList.vue';
import { markRaw, onMounted } from 'vue';
import { useShoppingItemsStore } from '@/stores/shoppingItems';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { useDialogStore } from '@/stores/dialog';
import ShoppingItemForm from '@/features/add-new-item/form/ShoppingItemForm.vue';
import { GROCERYITEMS } from '@/data/shoppingList';
import BaseToolbar from '@/components/toolbar/BaseToolbar.vue';
import { useToolbarStore } from '@/stores/toolbar';

const shoppingItemsStore = useShoppingItemsStore()

const toolbarStore = useToolbarStore()

onMounted(() => {
  shoppingItemsStore.shoppingItems = [...GROCERYITEMS]
})

//add new item
const dialogStore = useDialogStore()

function handleClickAddNewItem() {
  if (toolbarStore.isOpen) {
    toolbarStore.closeToolbar()

    return
  }


  dialogStore.open({
    component: markRaw(ShoppingItemForm),
    title: 'Add new item'
  })
}

</script>


<template>
  <header class="flex items-center justify-between border-b border-white/20">
    <MainNav />
    <button class="px-4" @click="handleClickAddNewItem">
      <FontAwesomeIcon :icon="faPlus" class="text-2xl" />
    </button>
  </header>
  <main class="flex-grow px-2 flex flex-col">
    <ShoppingList v-if="shoppingItemsStore.shoppingItems && shoppingItemsStore.shoppingItems.length > 0"
      :shopping-items="shoppingItemsStore.shoppingItems" />
    <BaseButton v-else @click="handleClickAddNewItem">Add item</BaseButton>
  </main>
  <BaseToolbar />
</template>
