<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue'
import { type ShoppingItemInterface } from '@/types/types';

interface Props {
  items: ShoppingItemInterface[]
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'on-confirm'): void
  (e: 'on-cancel'): void
}>()

function handleClickConfirm() {
  emit('on-confirm')
}

function handleClickCancel() {
  emit('on-cancel')
}

</script>

<template>
  <main class="p-2">
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </main>
  <footer class="p-2 border-y border-ash/20 flex gap-2">
    <BaseButton class="grow" @click="handleClickConfirm">Yes</BaseButton>
    <BaseButton button-type="danger" @click="handleClickCancel">Cancel</BaseButton>
  </footer>
</template>
