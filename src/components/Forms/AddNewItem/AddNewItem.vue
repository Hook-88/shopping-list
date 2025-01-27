<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog'
import { useShoppingList } from '@/stores/shoppingList';
import { onMounted, reactive, useTemplateRef } from 'vue';
import BaseInput from '@/components/Input/BaseInput.vue';
import FormButtons from '../FormButtons/FormButtons.vue';

const props = defineProps<{
  item?: {
    name: string
    quantity: number
    id: string
    label: string
  }
}>()

const dialogStore = useDialogStore()
const shoppingListStore = useShoppingList()

function handleClickCancel() {
  dialogStore.close()
}

const inputNameRef = useTemplateRef('input-name-ref')

function handleFocus() {
  if (!inputNameRef.value) {

    return
  }

  inputNameRef.value.focus()
}

onMounted(() => {
  handleFocus()
})

const formData = reactive({
  ['item-name']: props.item ? props.item.name : "",
  ['item-quantity']: props.item ? props.item.quantity : 1,
  ['item-label']: props.item ? props.item.label : ""
})

function handleSubmit() {
  if (props.item) {
    const mutatedItem = {
      name: formData['item-name'],
      quantity: formData['item-quantity'],
      label: formData['item-label'],
      id: props.item.id
    }

    shoppingListStore.mutateItem(props.item.id, {
      ...mutatedItem
    })

    dialogStore.close()
    return
  }


  shoppingListStore.addItem({
    name: formData['item-name'],
    quantity: formData['item-quantity'],
    label: formData['item-label']
  })

  resetForm()
  handleFocus()
}

function resetForm() {
  formData['item-name'] = ""
  formData['item-quantity'] = 1
  formData['item-label'] = ""
}




</script>

<template>
  <form class="text-[#d1d2d3] px-4 flex flex-col py-2 gap-3 pb-4" @submit.prevent="handleSubmit">
    <BaseInput label="Name" type="text" placeholder="name item..." required v-model="formData['item-name']"
      ref="input-name-ref" />

    <BaseInput label="Quantity" type="number" required v-model="formData['item-quantity']" />

    <BaseInput label="Label" type="text" placeholder="Item label..." v-model="formData['item-label']" />

    <FormButtons :onCancel="handleClickCancel" />
  </form>
</template>
