<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { useDialogStore } from '@/stores/dialog'
import { reactive } from 'vue'
import { useShoppingList } from '@/stores/shoppingList'

const dialogStore = useDialogStore()
const shoppingListStore = useShoppingList()

function handleClickClose() {
  dialogStore.close()
}

const formData = reactive({
  ['item-name']: ''
})

function handleSubmit() {
  shoppingListStore.addItem(formData['item-name'])
  formData['item-name'] = ''
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="" class="text-[#d1d2d3] block">Item name:</label>
    <input type="text" placeholder="Item..." required v-model="formData['item-name']"
      class="px-2 py-1 rounded-sm bg-[#1f1f1f] border border-[#d1d2d3]/20 text-[#d1d2d3]" />
    <div class="mt-6 flex gap-2">
      <button class="py-2 px-4 rounded bg-green-800 flex-grow">Add item</button>
      <button @click="handleClickClose" class="py-2 px-4 rounded bg-red-800" type="button">
        <FontAwesomeIcon :icon="faClose" />
      </button>
    </div>
  </form>
</template>
