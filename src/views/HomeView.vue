<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import MainNav from '@/components/main-nav/MainNav.vue';
import { useShoppingListStore } from '@/stores/shoppingList';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { computed, onMounted, reactive, ref } from 'vue';
import { GROCERYITEMS } from '@/data/shoppingList';
import ListItem from '@/components/shopping-list/ListItem.vue';
import { useSelectMultipleIds } from '@/features/select-multiple-ids/selectMultipleIds';
import { useSelectSingleId } from '@/features/select-single-id/selectSingleId';
import ListHeader from '@/components/shopping-list/ListHeader.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseModal from '@/components/modal/BaseModal.vue';
import ConfirmDeleteModal from '@/components/shopping-list/delete-item/ConfirmDeleteModal.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';
import { type ItemNoId } from '@/types/types';



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

//////Category
const selectedCategory = ref<string | null>(null)

function handleOnChangeCategory(label: string | null) {
  selectedCategory.value = label
}

const itemsOfCategory = computed(() => {

  if (selectedCategory.value) {

    return shoppingListStore.shoppingItems?.filter(shoppingItem => shoppingItem.label === selectedCategory.value)
  }

  return shoppingListStore.shoppingItems
})

//////filter unchecked
const hideUncheckedItems = ref(false)

const displayItems = computed(() => {
  if (hideUncheckedItems.value) {

    return itemsOfCategory.value?.filter(shoppingItem => {

      if (!selectMultipleIds.selectedIds.value.includes(shoppingItem.id)) {

        return shoppingItem
      }

    })
  }

  return itemsOfCategory.value
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


//Add new Item
const newItemModalRef = ref<InstanceType<typeof BaseModal> | null>(null)

function handleClickAddNewItem() {
  newItemModalRef.value?.openModal()
}

////Form handle
interface FormData {
  ['item-name']: string
  ['item-quantity']: number
  ['item-unit']: string
  ['item-label']: string
}

const formData = reactive<FormData>({
  "item-name": "",
  "item-label": "",
  "item-quantity": 1,
  "item-unit": "Pieces"
})

function handleSubmit() {

  const itemObj: ItemNoId = {
    name: formData['item-name'],
    quantity: formData['item-quantity'],
    unit: formData['item-unit'],
    label: formData['item-label']
  }

  shoppingListStore.addNewItem(itemObj)
  resetForm()
}

function resetForm() {
  formData['item-name'] = ''
  formData['item-quantity'] = 1
  formData['item-unit'] = 'Pieces'
  formData['item-label'] = ''
}



</script>


<template>
  <header class="text-2xl tracking-wider border-b border-ash/20 flex justify-between" :class="{
    'bg-sky-1000': menuIsOpen
  }">
    <MainNav @on-toggle-menu="handleOnToggleMenu" />

    <IconButton :icon-def="faPlus" @click="handleClickAddNewItem" />
  </header>

  <main class="grow px-2">
    <div v-if="shoppingListStore.shoppingItems && shoppingListStore.shoppingItems.length > 0">
      <ListHeader v-if="shoppingListStore.shoppingItems"
        :num-of-items-checked="selectMultipleIds.selectedIds.value.length"
        :num-of-shopping-items="shoppingListStore.shoppingItems.length" @on-toggle-hide="handleOnToggleHide"
        @on-change-category="handleOnChangeCategory" />
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
    <ConfirmDeleteModal v-if="selectedItems" :items="selectedItems" @on-confirm="handleOnConfirm"
      @on-cancel="handleOnCancel" />
  </BaseModal>

  <BaseModal ref="newItemModalRef" title="Add new items">
    <form @submit.prevent="handleSubmit">
      <div class="p-2 flex flex-col gap-3">

        <BaseInput label="Name" v-model="formData['item-name']" placeholder="Item name..." required />

        <div class="flex gap-2">
          <BaseInput label="Quantity" type="number" v-model="formData['item-quantity']" required />
          <BaseInput label="Unit" placeholder="item unit..." v-model="formData['item-unit']" required />
        </div>

        <BaseInput label="Label" placeholder="Label..." v-model="formData['item-label']" />

      </div>

      <div class="flex gap-2 p-2 border-y border-ash/20">
        <BaseButton class="grow">Add item</BaseButton>
        <BaseButton button-type="danger" type="button">Cancel</BaseButton>
      </div>

    </form>
  </BaseModal>

</template>
