<script setup lang="ts">
import BaseButton from '@/components/Buttons/BaseButton.vue';

defineProps<{
  onCancel: () => void
}>()
</script>

<template>
  <div class="flex gap-2 mt-2">
    <BaseButton class="flex-grow" button-type="confirm">Add item</BaseButton>
    <BaseButton button-type="danger">Cancel</BaseButton>
  </div>
</template>
