<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMinus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useShoppingList } from '@/stores/shoppingList';
import { useSelectId } from '@/stores/selectId';
import { computed, markRaw } from 'vue';
import { useDialogStore } from '@/stores/dialog';
import AddNewItem from '@/components/Forms/AddNewItem/AddNewItem.vue';
import { useToolbarStore } from '@/stores/toolbar';


const shoppingListStore = useShoppingList()
const selecIdStore = useSelectId()
const dialogStore = useDialogStore()
const toolbarStore = useToolbarStore()



const item = computed(() => shoppingListStore.shoppingItems?.find(shoppingItem => shoppingItem.id === selecIdStore.singleSelectedId))

const disableMinus = computed(() => {
  return item.value?.quantity === 1
})

function handleClickIncrement() {
  shoppingListStore.incrementItemQuantity(selecIdStore.singleSelectedId!)
}

function handleClickDecrement() {
  shoppingListStore.decrementItemQuantity(selecIdStore.singleSelectedId!)
}

function handleClickEdit() {
  dialogStore.open({
    component: markRaw(AddNewItem),
    props: {
      item: item
    }
  })
}

function handleClickDelete() {
  shoppingListStore.deleteItem(selecIdStore.singleSelectedId!)
  selecIdStore.singleSelectedId = null
  toolbarStore.close()

}

</script>

<template>
  <button class="px-4 py-2 disabled:text-white/30" @click="handleClickDecrement" :disabled="disableMinus">
    <FontAwesomeIcon :icon="faMinus" />
  </button>

  <button class="px-4 py-2" @click="handleClickIncrement">
    <FontAwesomeIcon :icon="faPlus" />
  </button>

  <button class="px-4 py-2" @click="handleClickEdit">
    <FontAwesomeIcon :icon="faEdit" />
  </button>

  <button class="px-4 py-2" @click="handleClickDelete">
    <FontAwesomeIcon :icon="faTrash" />
  </button>

</template>
