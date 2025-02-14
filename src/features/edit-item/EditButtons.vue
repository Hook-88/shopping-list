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
}>()

function handleClickDelteItem() {
  emit('on-delete-item', props.itemId!)
}

</script>

<template>
  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faMinus" />
  </BaseButton>

  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faPlus" />
  </BaseButton>

  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faEdit" />
  </BaseButton>

  <BaseButton class="grow" @click="handleClickDelteItem">
    <FontAwesomeIcon :icon="faTrash" />
  </BaseButton>
</template>
