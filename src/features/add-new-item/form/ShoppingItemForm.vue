<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseSelect from '@/components/input/BaseSelect.vue';
import { useDialogStore } from '@/stores/dialog';
import { useShoppingItemsStore } from '@/stores/shoppingItems';
import { onMounted, reactive, useTemplateRef } from 'vue';
import { type ShoppingItemNoId } from '@/stores/shoppingItems';

const dialogStore = useDialogStore()
const shoppingListStore = useShoppingItemsStore()

const inputNameRef = useTemplateRef<HTMLInputElement>('input-name-ref')

function handleClickCancel() {
  dialogStore.close()
}

const formData = reactive({
  ['item-name']: '',
  ['item-quantity']: 1,
  ['item-unit']: 'x',
  ['item-label']: ''
})

function resetForm() {
  formData['item-name'] = ''
  formData['item-quantity'] = 1
  formData['item-unit'] = 'x'
  formData['item-label'] = ''
}

function handleSubmit() {
  const itemObj: ShoppingItemNoId = {
    name: formData['item-name'],
    quantity: formData['item-quantity'],
    label: formData['item-label'],
    unit: formData['item-unit']
  }
  shoppingListStore.addNewItem(itemObj)
  resetForm()
}

onMounted(() => {
  inputNameRef.value?.focus()
})


</script>

<template>
  <form class="flex flex-col gap-4 mt-2 w-full" @submit.prevent="handleSubmit">

    <main class="mx-2 flex flex-col gap-2.5">
      <BaseInput label="Item name" class="bg-white/10 rounded-sm py-1 px-2" required v-model="formData['item-name']"
        ref="input-name-ref" />
      <div class="flex gap-2">
        <BaseInput :cancel-grow="true" label="Item quantity" class="bg-white/10 rounded-sm py-1 px-2 w-24" type="number"
          v-model="formData['item-quantity']" />
        <BaseSelect label="Item unit" class="bg-white/10 rounded-sm py-1.5 px-2" v-model="formData['item-unit']" />
      </div>
      <BaseInput label="Item label" class="bg-white/10 rounded-sm py-1 px-2" v-model="formData['item-label']" />
    </main>

    <footer class="flex items-center justify-between py-2 gap-2 border-t border-white/20 px-2">
      <BaseButton class="grow">Add item</BaseButton>
      <BaseButton button-type="danger" type="button" @click="handleClickCancel">Cancel</BaseButton>
    </footer>

  </form>
</template>
