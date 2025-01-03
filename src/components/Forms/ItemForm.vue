<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { useDialogStore } from '@/stores/dialog'
import { computed, onMounted, reactive, useTemplateRef } from 'vue'
import { useShoppingList } from '@/stores/shoppingList'
import { useSelectId } from '@/stores/selectId'
import DangerButton from '../buttons/DangerButton.vue'

const dialogStore = useDialogStore()
const shoppingListStore = useShoppingList()
const selectIdStore = useSelectId()

const props = defineProps<{
  itemData?: {
    name: string,
    quantity: number
    id: string
  }
}>()

const actionButtonText = computed(() => {
  if (props.itemData) {
    return 'Save item'
  }

  return 'Add item'
})

const nameInputRef = useTemplateRef('name-input')

onMounted(() => {
  nameInputRef.value?.focus()
})

function handleClickClose() {
  selectIdStore.deSelectAll()
  dialogStore.close()
}

const formData = reactive({
  ['item-name']: props.itemData ? props.itemData.name : '',
  ['item-quantity']: props.itemData ? props.itemData.quantity : 1,
})

function handleSubmit() {
  if (props.itemData) {
    shoppingListStore.mutateItem(props.itemData.id, { name: formData['item-name'], quantity: formData['item-quantity'] })
    dialogStore.close()
    return
  }
  shoppingListStore.addItem({ name: formData['item-name'], quantity: formData['item-quantity'] })
  formData['item-name'] = ''
  formData['item-quantity'] = 1
  nameInputRef.value?.focus()
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="item-name" class="text-[#d1d2d3] block">Item name:</label>
    <input ref="name-input" id="item-name" type="text" placeholder="Item..." required v-model="formData['item-name']"
      class="px-2 py-1 rounded-sm bg-[#1f1f1f] border border-[#d1d2d3]/20 text-[#d1d2d3]" />

    <label for="item-quantity" class="text-[#d1d2d3] block mt-2">Quantity:</label>
    <input type="number" required v-model="formData['item-quantity']"
      class="px-2 py-1 rounded-sm bg-[#1f1f1f] border border-[#d1d2d3]/20 text-[#d1d2d3]" />

    <div class="mt-6 flex gap-2">
      <button class="py-2 px-4 rounded bg-green-800 flex-grow">{{ actionButtonText }}</button>
      <DangerButton @click="handleClickClose" type="button">
        <FontAwesomeIcon :icon="faClose" />
      </DangerButton>
    </div>
  </form>
</template>
