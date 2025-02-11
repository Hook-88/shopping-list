<script setup lang="ts">
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';
import MainNav from '@/components/main-nav/MainNav.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { onMounted } from 'vue';
import { useShoppingListStore } from '@/stores/shoppingList';
import { GROCERYITEMS } from '@/data/shoppingList';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import ShoppingItem from '@/components/lists/shopping-list/ShoppingItem.vue';

const shoppingListStore = useShoppingListStore()

onMounted(() => {
  shoppingListStore.shoppingItems = GROCERYITEMS
})

</script>


<template>
  <header class="text-2xl tracking-wider font-bold border-b border-ash/20 flex justify-between">
    <MainNav />
    <BaseButton>
      <FontAwesomeIcon :icon="faPlus" />
    </BaseButton>
  </header>
  <main class="grow flex flex-col px-2">
    <ul v-if="shoppingListStore.shoppingItems && shoppingListStore.shoppingItems.length > 0" class="space-y-2">
      <li v-for="item in shoppingListStore.shoppingItems" :key="item.id">
        <ShoppingItem :item="item" :is-checked="false" />
      </li>
    </ul>
    <BaseButton v-else button-type="action">Add new item</BaseButton>

  </main>
</template>
