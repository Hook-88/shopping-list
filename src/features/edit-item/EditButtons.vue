<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import { faEdit, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

interface Props {
  itemId: string | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'on-delete-item', itemId: string): void
  (e: 'on-increment-item', itemId: string): void
  (e: 'on-decrement-item', itemId: string): void
  (e: 'on-edit-item', itemId: string): void
}>()

//for debouncing
const isProcessing = ref(false)


// delete item
function handleClickDelteItem() {
  emit('on-delete-item', props.itemId!)
}

//increment item
function handleClickIncrementItem() {
  if (isProcessing.value || !props.itemId) {
    return
  }

  isProcessing.value = true
  emit('on-increment-item', props.itemId!)

  // Reset after a short delay
  setTimeout(() => {
    isProcessing.value = false
  }, 150)
}

//decrement item
function handleClickDecrement() {
  if (isProcessing.value || !props.itemId) {
    return
  }

  isProcessing.value = true
  emit('on-decrement-item', props.itemId)

  // Reset after a short delay
  setTimeout(() => {
    isProcessing.value = false
  }, 150) // 250ms delay, adjust as needed
}

//Edit item
function handleEditItem() {
  if (props.itemId) {
    emit('on-edit-item', props.itemId)
  }
}

</script>

<template>
  <BaseButton class="grow" @click="handleClickDecrement">
    <FontAwesomeIcon :icon="faMinus" />
  </BaseButton>

  <BaseButton class="grow" @click="handleClickIncrementItem">
    <FontAwesomeIcon :icon="faPlus" />
  </BaseButton>

  <BaseButton class="grow" @click="handleEditItem">
    <FontAwesomeIcon :icon="faEdit" />
  </BaseButton>

  <BaseButton class="grow" @click="handleClickDelteItem">
    <FontAwesomeIcon :icon="faTrash" />
  </BaseButton>
</template>
