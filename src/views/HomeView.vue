<script setup lang="ts">
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';
import MainNav from '@/components/main-nav/MainNav.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { markRaw, onMounted, ref } from 'vue';
import { useShoppingListStore } from '@/stores/shoppingList';
import { GROCERYITEMS } from '@/data/shoppingList';
import ShoppingItem from '@/components/lists/shopping-list/ShoppingItem.vue';
import { useSelectMultipleIds } from '@/features/select-multiple-ids/selectMultipleIds';
import BaseModal from '@/components/modal/BaseModal.vue';
import { useDialogStore } from '@/stores/dialog';
import AddNewItemForm from '@/features/add-new-item/form/AddNewItemForm.vue';
import { useSelectSingleId } from '@/features/select-single-id/selectSingleId';

const shoppingListStore = useShoppingListStore()

onMounted(() => {
  shoppingListStore.shoppingItems = GROCERYITEMS
})

//toggle check item
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


//delete checked items
function handleClickDeleteItems() {
  shoppingListStore.deleteMultipleItems(selectMultipleIds.selectedIds.value)
  selectMultipleIds.clearSelection()

}

function noItemsChecked() {
  return selectMultipleIds.selectedIds.value.length === 0
}

//add new item
const dialogStore = useDialogStore()

function handleClickAddNewItem() {
  dialogStore.open({
    component: markRaw(AddNewItemForm),
    title: 'Add new item'
  })
}

//Edit item
const selectSingleId = useSelectSingleId()

function handleOnEditItem(itemId: string) {
  selectSingleId.toggleSelectId(itemId)
}

function isSelectedToEdit(itemId: string) {
  return itemId === selectSingleId.selectedId.value
}

</script>


<template>
  <header class="text-2xl tracking-wider font-bold border-b border-ash/20 flex justify-between">
    <MainNav />
    <BaseButton @click="handleClickAddNewItem">
      <FontAwesomeIcon :icon="faPlus" />
    </BaseButton>
  </header>
  <main class="grow flex flex-col px-2">
    <div v-if="shoppingListStore.shoppingItems && shoppingListStore.shoppingItems.length > 0">
      <ul class="space-y-2">
        <li v-for="item in shoppingListStore.shoppingItems" :key="item.id">
          <ShoppingItem :item="item" :is-checked="itemIsChecked(item.id)" @on-toggle-check="handleOnToggleCheck"
            :is-selected="isSelectedToEdit(item.id)" @on-edit-item="handleOnEditItem" />
        </li>
      </ul>

      <BaseButton button-type="danger" :disabled="noItemsChecked()"
        class="w-full mt-4 disabled:bg-red-900/50 disabled:text-white/50" @click="handleClickDeleteItems">
        Delete checked items
      </BaseButton>

    </div>

    <BaseButton v-else button-type="action" @click="handleClickAddNewItem">Add new item</BaseButton>

  </main>
  <BaseModal />
</template>
