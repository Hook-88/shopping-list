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
      <li v-for="item in shoppingListStore.shoppingItems" :key="item.id"
        class="border border-ash/20 rounded pl-2 flex items-center justify-between">
        <p>
          {{ item.name }}
          <span>({{ item.quantity }} {{ item.unit }})</span>
        </p>

        <IconButton :icon-def="faCircle" class="p-3" />
      </li>
    </ul>

  </main>

</template>
