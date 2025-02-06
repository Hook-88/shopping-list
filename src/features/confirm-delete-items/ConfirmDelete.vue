<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import { useDialogStore } from '@/stores/dialog';

const props = defineProps<{
  handleDelete: () => void
}>()

const dialogStore = useDialogStore()

function handleClickCancel() {
  dialogStore.close()
}

function handleClickConfirm() {
  props.handleDelete()
  dialogStore.close()
}

</script>

<template>
  <main class="border-b border-white/20 p-2">
    <p class="text-lg">Do you want to delete these items?</p>
    <ul class="mt-1">
      <li>One</li>
      <li>One</li>
      <li>One</li>
    </ul>
  </main>
  <footer class="flex items-center justify-between border-b border-white/20 p-2 gap-2">
    <BaseButton class="grow" @click="handleClickConfirm">Confirm</BaseButton>
    <BaseButton button-type="danger" @click="handleClickCancel">Cancel</BaseButton>
  </footer>
</template>
