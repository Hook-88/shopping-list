<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import { type ShoppingItemInterface } from '@/types/types';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { computed } from 'vue';

const props = defineProps<{
  item: ShoppingItemInterface
  isChecked?: boolean
  isSelectedToEdit?: boolean
}>()

const emit = defineEmits<{
  (e: 'on-toggle-check', itemId: string): void
  (e: 'on-edit-item', itemId: string): void
}>()

const liClassName = computed(() => {
  if (props.isChecked) {
    return 'bg-green-900 border-ash/20'
  }

  if (props.isSelectedToEdit) {
    return 'border-ash/80'
  }

  return 'border-ash/20'
})

const liButtonIcon = computed(() => {
  if (props.isChecked) {
    return faCheck
  }

  if (props.isSelectedToEdit) {
    return faCircleSolid
  }

  return faCircle
})

//Toggle check item
function handleClickItem() {
  emit('on-toggle-check', props.item.id)
}

//Edit item
function handleClickEditItem() {
  emit('on-edit-item', props.item.id)
}

</script>

<template>
  <li class="border rounded pl-2 flex items-center justify-between" :class="liClassName" @click="handleClickItem">
    <p>
      {{ item.name }}
      <span>({{ item.quantity }} {{ item.unit }})</span>
    </p>

    <IconButton :icon-def="liButtonIcon" :disabled="props.isChecked" @click.stop="handleClickEditItem" class="p-3" />
  </li>
</template>
