<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useShoppingItem } from './shoppingItem';
import { type shoppingItemInterface } from './shoppingItem';
import { computed } from 'vue';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircle as faCircleFill } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  item: GroceryItemInterface
  isChecked: boolean
}>()

const shoppingItemClassName = computed(() => {
  if (props.isChecked) {
    return "flex items-center border border-white/20 rounded-xs bg-green-800"
  }

  return "flex items-center border border-white/20 rounded-xs"
})

const emit = defineEmits<{
  (e: 'onToggleCheck', id: string): void
}>()

function handleClickItem() {
  emit('onToggleCheck', props.item.id)
}

</script>

<template>
  <div :class="shoppingItemClassName" @click="handleClickItem">
    <h3 class="ml-4">{{ props.item.name }}</h3>
    &nbsp;
    <span>({{ props.item.quantity }}x)</span>
    <!-- <span v-if="itemIdIsSelected" class="p-4 ml-auto">
      <FontAwesomeIcon :icon="faCheck" />
    </span> -->
    <button class="p-4 ml-auto">
      <FontAwesomeIcon :icon="faCircle" />
    </button>
  </div>
</template>
