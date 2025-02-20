<script setup lang="ts">
import { reactive } from 'vue'
import BaseInput from '@/components/inputs/BaseInput.vue'
import BaseButton from '@/components/buttons/BaseButton.vue'

export interface ItemFormData {
  ['item-name']: string
  ['item-quantity']: number
  ['item-unit']: string
  ['item-label']: string
}

const emit = defineEmits<{
  (e: 'on-submit-form', formData: ItemFormData): void
}>()

const formData = reactive<ItemFormData>({
  "item-name": "",
  "item-label": "",
  "item-quantity": 1,
  "item-unit": "Pieces"
})

function handleOnSubmitForm() {
  emit('on-submit-form', formData)
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
  <form @submit.prevent="handleOnSubmitForm">
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
</template>
