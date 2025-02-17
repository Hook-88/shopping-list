<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import ButtonIcon from '@/components/buttons/IconButton.vue';
import MainNav from '@/components/main-nav/MainNav.vue';
import NavLink from '@/components/main-nav/NavLink.vue';
import { useShoppingListStore } from '@/stores/shoppingList';
import { faAngleRight, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed, onMounted, ref, useTemplateRef } from 'vue';
import { GROCERYITEMS } from '@/data/shoppingList';
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle';
import ListItem from '@/components/shopping-list/ListItem.vue';
import { useSelectMultipleIds } from '@/features/select-multiple-ids/selectMultipleIds';
import { useSelectSingleId } from '@/features/select-single-id/selectSingleId';
import ListHeader from '@/components/shopping-list/ListHeader.vue';

//Main menu
const menuIsOpen = ref(false)

function handleOnToggleMenu(isOpen: boolean) {
  menuIsOpen.value = isOpen
}


//Shopping List
const shoppingListStore = useShoppingListStore()

onMounted(() => {
  shoppingListStore.shoppingItems = GROCERYITEMS
})


////Check Item
const selectMultipleIds = useSelectMultipleIds()

function handleOnToggleCheck(itemId: string) {
  if (selectSingleId.selectedId.value) {
    selectSingleId.clearSelection()
    return
  }
  selectMultipleIds.toggleSelectId(itemId)
}

function itemIsChecked(itemId: string) {
  return selectMultipleIds.selectedIds.value.includes(itemId)
}


////Select item to Edit
const selectSingleId = useSelectSingleId()

function handleOnEditItem(itemId: string) {
  selectSingleId.toggleSelectId(itemId)
}

function itemIsSelectedToEdit(itemId: string) {
  return selectSingleId.selectedId.value === itemId
}


</script>


<template>
  <header class="text-2xl tracking-wider border-b border-ash/20 flex justify-between" :class="{
    'bg-sky-1000': menuIsOpen
  }">
    <MainNav @on-toggle-menu="handleOnToggleMenu" />

    <IconButton :icon-def="faPlus" />
  </header>

  <main class="grow px-2">
    <ListHeader v-if="shoppingListStore.shoppingItems"
      :num-of-items-checked="selectMultipleIds.selectedIds.value.length"
      :num-of-shopping-items="shoppingListStore.shoppingItems?.length" />
    <ul class="space-y-2">
      <ListItem v-for="item in shoppingListStore.shoppingItems" :key="item.id" :item="item"
        :is-checked="itemIsChecked(item.id)" @on-toggle-check="handleOnToggleCheck" @on-edit-item="handleOnEditItem"
        :is-selected-to-edit="itemIsSelectedToEdit(item.id)" />
    </ul>

  </main>

</template>
