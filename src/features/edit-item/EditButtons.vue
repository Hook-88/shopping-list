<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import { faEdit, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface Props {
  itemId: string | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'on-delete-item', itemId: string): void
  (e: 'on-increment-item', itemId: string): void
  (e: 'on-decrement-item', itemId: string): void
}>()

// delete item
function handleClickDelteItem() {
  emit('on-delete-item', props.itemId!)
}

//increment item
function handleClickIncrementItem() {
  emit('on-increment-item', props.itemId!)
}

</script>

<template>
  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faMinus" />
  </BaseButton>

  <BaseButton class="grow" @click="handleClickIncrementItem">
    <FontAwesomeIcon :icon="faPlus" />
  </BaseButton>

  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faEdit" />
  </BaseButton>

  <BaseButton class="grow" @click="handleClickDelteItem">
    <FontAwesomeIcon :icon="faTrash" />
  </BaseButton>
</template>
