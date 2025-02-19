<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import MainNav from '@/components/main-nav/MainNav.vue';
import { useShoppingListStore } from '@/stores/shoppingList';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { computed, onMounted, ref } from 'vue';
import { GROCERYITEMS } from '@/data/shoppingList';
import ListItem from '@/components/shopping-list/ListItem.vue';
import { useSelectMultipleIds } from '@/features/select-multiple-ids/selectMultipleIds';
import { useSelectSingleId } from '@/features/select-single-id/selectSingleId';
import ListHeader from '@/components/shopping-list/ListHeader.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseModal from '@/components/modal/BaseModal.vue';
import ConfirmDeleteModal from '@/components/shopping-list/delete-item/ConfirmDeleteModal.vue';

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

////Filters

//////filter unchecked
const hideUncheckedItems = ref(false)

const displayItems = computed(() => {
  if (hideUncheckedItems.value) {

    return shoppingListStore.shoppingItems?.filter(shoppingItem => {

      if (!selectMultipleIds.selectedIds.value.includes(shoppingItem.id)) {

        return shoppingItem
      }

    })
  }

  return shoppingListStore.shoppingItems
})

function handleOnToggleHide() {
  hideUncheckedItems.value = !hideUncheckedItems.value
}



////Select item to Edit
const selectSingleId = useSelectSingleId()

function handleOnEditItem(itemId: string) {
  selectSingleId.toggleSelectId(itemId)
}

function itemIsSelectedToEdit(itemId: string) {
  return selectSingleId.selectedId.value === itemId
}


////Delete Checked Items
const confirmDeleteModalRef = ref<InstanceType<typeof BaseModal> | null>(null)
const selectedItems = computed(() => {

  if (shoppingListStore.shoppingItems) {

    return shoppingListStore.shoppingItems.filter(shoppingItem => {

      if (selectMultipleIds.selectedIds.value.includes(shoppingItem.id)) {

        return shoppingItem
      }
    })
  }

  return null
})

function openConfirmDeleteModal() {
  if (confirmDeleteModalRef.value) {
    confirmDeleteModalRef.value.openModal()
    confirmDeleteModalRef.value.dialogTitle = 'Delete these items?'
  }
}

function closeConfirmDeleteModal() {
  if (confirmDeleteModalRef.value) {
    confirmDeleteModalRef.value.closeModal()
  }
}

function handleClickDeleteItems() {
  openConfirmDeleteModal()

}

function handleOnConfirm() {
  shoppingListStore.deleteMultipleItems(selectMultipleIds.selectedIds.value)
  selectMultipleIds.clearSelection()
  closeConfirmDeleteModal()
}

function handleOnCancel() {
  closeConfirmDeleteModal()
}


//////Disable Delete Button
const noItemsChecked = computed(() => {
  return selectMultipleIds.selectedIds.value.length === 0
})


</script>


<template>
  <header class="text-2xl tracking-wider border-b border-ash/20 flex justify-between" :class="{
    'bg-sky-1000': menuIsOpen
  }">
    <MainNav @on-toggle-menu="handleOnToggleMenu" />

    <IconButton :icon-def="faPlus" />
  </header>

  <main class="grow px-2">
    <div v-if="displayItems && displayItems.length > 0">
      <ListHeader v-if="shoppingListStore.shoppingItems"
        :num-of-items-checked="selectMultipleIds.selectedIds.value.length"
        :num-of-shopping-items="shoppingListStore.shoppingItems.length" @on-toggle-hide="handleOnToggleHide" />
      <ul class="space-y-2">
        <ListItem v-for="item in displayItems" :key="item.id" :item="item" :is-checked="itemIsChecked(item.id)"
          @on-toggle-check="handleOnToggleCheck" @on-edit-item="handleOnEditItem"
          :is-selected-to-edit="itemIsSelectedToEdit(item.id)" />
      </ul>

      <BaseButton :disabled="noItemsChecked" button-type="danger" @click="handleClickDeleteItems"
        class="mt-4 w-full disabled:bg-red-950 disabled:text-white/50">Delete
        checked items
      </BaseButton>
    </div>

    <BaseButton v-else class="w-full">Add new Item</BaseButton>
  </main>

  <BaseModal ref="confirmDeleteModalRef" title="Delete these items?">
    <ConfirmDeleteModal :items="selectedItems!" @on-confirm="handleOnConfirm" @on-cancel="handleOnCancel" />
  </BaseModal>

</template>
