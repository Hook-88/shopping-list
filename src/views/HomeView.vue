<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import ButtonIcon from '@/components/buttons/IconButton.vue';
import MainNav from '@/components/main-nav/MainNav.vue';
import NavLink from '@/components/main-nav/NavLink.vue';
import { useShoppingListStore } from '@/stores/shoppingList';
import { faAngleRight, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted, ref, useTemplateRef } from 'vue';
import { GROCERYITEMS } from '@/data/shoppingList';
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle';
import ListItem from '@/components/shopping-list/ListItem.vue';

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
const selectMultipleIds = ref<string[]>([])

function selectId(itemId: string) {
  selectMultipleIds.value.push(itemId)
}

function deSelectId(itemId: string) {
  selectMultipleIds.value = selectMultipleIds.value.filter(id => id !== itemId)
}

function toggleSelectId(itemId: string) {
  if (selectMultipleIds.value.includes(itemId)) {
    deSelectId(itemId)
    return
  }

  selectId(itemId)
}

function handleOnToggleCheck(itemId: string) {
  toggleSelectId(itemId)
}

function itemIChecked(itemId: string) {
  return selectMultipleIds.value.includes(itemId)
}

</script>


<template>
  <header class="text-2xl tracking-wider border-b border-ash/20 flex justify-between" :class="{
    'bg-sky-1000': menuIsOpen
  }">
    <MainNav @on-toggle-menu="handleOnToggleMenu" />

    <IconButton :icon-def="faPlus" />
  </header>

  <main class="grow">
    <ul class="mx-2 space-y-2">
      <ListItem v-for="item in shoppingListStore.shoppingItems" :key="item.id" :item="item"
        :is-checked="itemIChecked(item.id)" @on-toggle-check="handleOnToggleCheck" />
    </ul>

  </main>

</template>
