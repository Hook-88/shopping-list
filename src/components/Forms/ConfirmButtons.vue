<script setup lang="ts">
import BaseButton from '../buttons/BaseButton.vue'
import DangerButton from '../buttons/DangerButton.vue'

const props = defineProps<{
  onConfirm: () => void
  onClose: () => void
}>()

function handleClickConfirm() {
  props.onConfirm()
  props.onClose()
}

</script>

<template>
  <div class="flex gap-4">
    <BaseButton class="px-10" @click="handleClickConfirm">Confirm</BaseButton>
    <DangerButton @click="onClose">Cancel</DangerButton>
  </div>
</template>
