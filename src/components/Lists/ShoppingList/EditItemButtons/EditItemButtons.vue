<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faMinus, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.vue'
import MenuItem from '@/components/DropdownMenu/MenuItem.vue'
import { useDialogStore } from '@/stores/dialog'
import ConfirmButtons from '@/components/Forms/ConfirmButtons.vue'
import { useSelectId } from '@/stores/selectId'
import { useShoppingList } from '@/stores/shoppingList'
import { markRaw } from 'vue'

const dialogStore = useDialogStore()
const selectIdStore = useSelectId()
const shoppingListStore = useShoppingList()

function handleClickDelete() {
  dialogStore.open({
    title: 'Delete item',
    component: markRaw(ConfirmButtons),
    props: {
      onConfirm: deleteItem,
      onClose: dialogStore.close,
      items: [shoppingListStore.items?.find(item => item.id === selectIdStore.editId)?.name]
    }
  })
}

function deleteItem() {
  shoppingListStore.deleteItem(selectIdStore.editId!)
  selectIdStore.editId = null
}


</script>

<template>
  <button class="px-4 py-2 rounded-sm bg-green-800 flex-grow">
    <FontAwesomeIcon :icon="faPlus" />
  </button>
  <button class="px-4 py-2 rounded-sm bg-red-800 disabled:text-white/50 disabled:bg-red-800/50 flex-grow">
    <FontAwesomeIcon :icon="faMinus" />
  </button>
  <DropdownMenu :is-on-bottom-sreen="true">
    <template v-slot:button>
      <FontAwesomeIcon :icon="faCaretDown" class="px-4 py-4 rounded-sm bg-sky-700" />
    </template>
    <MenuItem>Edit item</MenuItem>
    <MenuItem @click.stop="handleClickDelete">Delete item</MenuItem>

  </DropdownMenu>
</template>
