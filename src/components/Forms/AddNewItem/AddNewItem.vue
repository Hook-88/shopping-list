<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog'
import { useShoppingList } from '@/stores/shoppingList';
import { onMounted, reactive, useTemplateRef } from 'vue';

const dialogStore = useDialogStore()
const shoppingListStore = useShoppingList()

function handleClickCancel() {
  dialogStore.close()
}

const inputNameRef = useTemplateRef('input-name-ref')

onMounted(() => {
  inputNameRef.value?.focus()
})

const formData = reactive({
  ['item-name']: "",
  ['item-quantity']: 1,
  ['item-label']: ''
})

function handleSubmit() {
  shoppingListStore.addItem({
    name: formData['item-name'],
    quantity: formData['item-quantity'],
    label: formData['item-label']
  })

  resetForm()
}

function resetForm() {
  formData['item-name'] = ""
  formData['item-quantity'] = 1
  formData['item-label'] = ""
}

</script>

<template>
  <form class="text-[#d1d2d3] px-4 flex flex-col py-2 gap-3 pb-4" @submit.prevent="handleSubmit">
    <div>
      <label>Name:</label>
      <br />
      <input type="text" placeholder="working..." required
        class="w-full px-2 py-1 rounded border border-[#d1d2d3]/20 bg-transparent" ref="input-name-ref"
        v-model="formData['item-name']">
    </div>

    <div>
      <label>Quantity:</label>
      <br />
      <input type="number" placeholder="quantity...."
        class="w-full px-2 py-1 rounded border border-[#d1d2d3]/20 bg-transparent" v-model="formData['item-quantity']">
    </div>

    <div>
      <label>Label:</label>
      <br />
      <input type="text" placeholder="label...."
        class="w-full px-2 py-1 rounded border border-[#d1d2d3]/20 bg-transparent" v-model="formData['item-label']">
    </div>

    <div class="flex gap-2 mt-2">
      <button class="flex-grow bg-green-800 py-2 px-4">Add item</button>
      <button class="bg-red-800 py-2 px-4" type="button" @click="handleClickCancel">Cancel</button>
    </div>
  </form>
</template>
