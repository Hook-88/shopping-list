<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';
import BaseSelect from '@/components/inputs/BaseSelect.vue';
import { useDialogStore } from '@/stores/dialog';
import { useShoppingListStore, type itemWithoutId } from '@/stores/shoppingList';
import { computed, onMounted, reactive, useTemplateRef } from 'vue';

interface FormData {
  ['item-name']: string
  ['item-quantity']: number
  ['quantity-unit']: string
  ['item-label']: string
}
const shoppingListStore = useShoppingListStore()
const dialogStore = useDialogStore()

const itemObj = computed(() => {
  if (dialogStore.props.itemId) {
    return shoppingListStore.getShoppingItem(dialogStore.props.itemId)
  }

  return null
})

const formData = reactive<FormData>({
  "item-name": itemObj.value ? itemObj.value.name : "",
  "item-quantity": itemObj.value ? itemObj.value.quantity : 1,
  "quantity-unit": itemObj.value ? itemObj.value.unit : "x",
  "item-label": itemObj.value ? itemObj.value.label : "",
})

//submit form

function handleSubmit() {
  if (itemObj.value) {
    const newObj: itemWithoutId = {
      label: formData['item-label'],
      name: formData['item-name'],
      quantity: formData['item-quantity'],
      unit: formData['quantity-unit']
    }

    shoppingListStore.replaceItem(itemObj.value.id, newObj)
    dialogStore.close()

    return
  }


  shoppingListStore.addNewItem({
    label: formData['item-label'],
    name: formData['item-name'],
    quantity: formData['item-quantity'],
    unit: formData['quantity-unit']
  })

  //TODO add logic to replace item on submit

  resetForm()
  focusOnNameInput()
}

function resetForm() {
  formData['item-label'] = ""
  formData['item-name'] = ""
  formData['item-quantity'] = 1
  formData['quantity-unit'] = "x"
}


//focus on name input
const nameInputRef = useTemplateRef<{ focus: () => void }>('name-input-ref')

function focusOnNameInput() {
  nameInputRef.value?.focus()
}

onMounted(() => {
  focusOnNameInput()
})

//Close modal

function handleCloseForm() {
  dialogStore.close()
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col m-2 gap-3 mb-4">
      <div>
        <BaseInput label="Name" type="text" placeholder="Item name..." class="w-full bg-ash/10 px-2 py-1 rounded-sm"
          v-model="formData['item-name']" required ref="name-input-ref" />
      </div>


      <div class="flex gap-3">
        <div class="grow">
          <BaseInput label="Quantity" type="number" class="w-full bg-ash/10 px-2 py-1 rounded-sm"
            v-model="formData['item-quantity']" required />
        </div>

        <div class="w-18">
          <BaseSelect label="Unit" class="w-full bg-ash/10 px-2 py-1.5 rounded-sm" v-model="formData['quantity-unit']"
            required />
        </div>
      </div>
      <div>
        <BaseInput label="Label" type="text" placeholder="label..." class="w-full bg-ash/10 px-2 py-1 rounded-sm"
          v-model="formData['item-label']" />
      </div>
    </div>


    <div class="flex gap-3 border-t border-ash/20 p-2">
      <BaseButton button-type="action" class="grow">
        {{ itemObj ? 'Save' : 'Add item' }}
      </BaseButton>
      <BaseButton button-type="danger" type="button" @click="handleCloseForm">Cancel</BaseButton>
    </div>

  </form>
</template>
