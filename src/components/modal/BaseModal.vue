<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ref, useTemplateRef } from 'vue';

const dialogRef = useTemplateRef('dialog-ref')
const dialogTitle = ref<string | null>(null)

function openModal() {
  if (dialogRef.value) {
    dialogRef.value.showModal()
  }
}

function closeModal() {
  if (dialogRef.value) {
    dialogRef.value.close()
  }
}

function handleCloseDialog() {
  closeModal()
}

defineExpose({
  openModal,
  closeModal,
  dialogTitle
})

</script>

<template>
  <dialog class="min-w-screen bg-obsidian text-ash backdrop:backdrop-blur-md" ref="dialog-ref"
    @close="handleCloseDialog">
    <header class="text-2xl tracking-wider flex items-center pl-2 justify-between border-b border-ash/20">
      <h1>{{ dialogTitle ? dialogTitle : 'Add a title' }}</h1>
      <IconButton :icon-def="faClose" @click="handleCloseDialog" />
    </header>
    <slot></slot>
  </dialog>
</template>
