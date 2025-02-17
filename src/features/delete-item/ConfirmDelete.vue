<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue'
import { useDialogStore } from '@/stores/dialog';
import { useShoppingListStore } from '@/stores/shoppingList';
import { computed } from 'vue';
import { type ShoppingItemInterface } from '@/types/types';

const dialogStore = useDialogStore()
const shoppingListStore = useShoppingListStore()

const selectedItems = computed(() => {
  const idArr = dialogStore.props.checkedIds as string[]
  const itemArr: ShoppingItemInterface[] = []
  // get selected items
  idArr.forEach(id => {
    const seletectedItem = shoppingListStore.getShoppingItem(id)
    if (seletectedItem) {
      itemArr.push(seletectedItem)
    }
  })

  return itemArr
})

function handleClickCancel() {
  dialogStore.close()
}

</script>

<template>
  <main class="p-2">
    <ul>
      <li v-for="item in selectedItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </main>
  <footer class="flex p-2 gap-2 border-t border-ash/20">
    <BaseButton button-type="action" class="grow">Confirm</BaseButton>
    <BaseButton button-type="danger" @click="handleClickCancel">Cancel</BaseButton>
  </footer>
</template>
