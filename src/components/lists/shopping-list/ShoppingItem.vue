<script setup lang="ts">
import { type ShoppingItemInterface } from '@/types/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
// import { faCircle as faCircleFull } from '@fortawesome/free-solid-svg-icons';
import { computed } from 'vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const props = defineProps<{
  item: ShoppingItemInterface
  isChecked: boolean
}>()

const emit = defineEmits<{
  (e: 'on-toggle-check', itemId: string): void
}>()

const shoppingItemClassName = computed(() => {
  if (props.isChecked) {
    return 'bg-green-900'
  }

  return null
})

function handleClickItem() {
  emit('on-toggle-check', props.item.id)
}

const itemQuantityText = computed(() => {
  if (props.item.unit === 'x' && props.item.quantity === 1) {
    return null
  }

  if (props.item.unit === 'x') {
    return `(${props.item.quantity}${props.item.unit})`
  }

  return `(${props.item.quantity} ${props.item.unit})`
})

</script>

<template>
  <div class="pl-2 border border-ash/20 rounded-xs flex items-center" :class="shoppingItemClassName"
    @click="handleClickItem">
    <p>
      {{ item.name }}
      {{ itemQuantityText }}
    </p>
    <span class="ml-auto py-4 px-4 flex items-center" v-if="props.isChecked">
      <FontAwesomeIcon :icon="faCheck" />
    </span>
    <BaseButton class="ml-auto py-4 px-4 flex items-center" v-else>
      <FontAwesomeIcon :icon="faCircle" />
    </BaseButton>
  </div>
</template>
