<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import { type ShoppingItemInterface } from '@/types/types';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { computed } from 'vue';

const props = defineProps<{
  item: ShoppingItemInterface
  isChecked?: boolean
}>()

const emit = defineEmits<{
  (e: 'on-toggle-check', itemId: string): void
}>()

const liClassName = computed(() => {
  if (props.isChecked) {
    return 'bg-green-900'
  }

  return null
})

const liButtonIcon = computed(() => {
  if (props.isChecked) {
    return faCheck
  }

  return faCircle
})

//toggle check item
function handleClickItem() {
  emit('on-toggle-check', props.item.id)
}


</script>

<template>
  <li class="border border-ash/20 rounded pl-2 flex items-center justify-between" :class="liClassName"
    @click="handleClickItem">
    <p>
      {{ item.name }}
      <span>({{ item.quantity }} {{ item.unit }})</span>
    </p>

    <IconButton :icon-def="liButtonIcon" :disabled="props.isChecked" class="p-3" />
  </li>
</template>
