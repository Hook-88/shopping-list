<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';
import BaseSelect from '@/components/inputs/BaseSelect.vue';
import { reactive } from 'vue';

interface FormData {
  ['item-name']: string
  ['item-quantity']: number
  ['quantity-unit']: 'x' | 'gr' | 'lb'
  ['item-label']: string
}

const formData = reactive<FormData>({
  "item-name": "",
  "item-quantity": 1,
  "quantity-unit": 'x',
  "item-label": ""
})

function handleSubmit() {
  console.log(formData)
}



</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col m-2 gap-3 mb-4">
      <div>
        <BaseInput label="Name" type="text" placeholder="Item name..." class="w-full bg-ash/10 px-2 py-1 rounded-sm"
          v-model="formData['item-name']" required />
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
      <BaseButton button-type="action" class="grow">Add item</BaseButton>
      <BaseButton button-type="danger" type="button">Cancel</BaseButton>
    </div>

  </form>
</template>
