<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog';
import { useTemplateRef, watch } from 'vue';
import BaseButton from '../buttons/BaseButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const dialogStore = useDialogStore()

const dialogRef = useTemplateRef('dialog-ref')

watch(
  () => dialogStore.isOpen,
  (open: boolean) => {
    if (open) {
      dialogRef.value?.showModal()
    } else {
      dialogRef.value?.close()
    }
  }
)

function handleClose() {
  dialogStore.close()
}

</script>

<template>
  <dialog ref="dialog-ref" @close="handleClose"
    class="min-w-screen backdrop:backdrop-blur-sm bg-obsidian border-b border-ash/20 text-ash">
    <header class="text-2xl tracking-wider font-bold border-b border-ash/20 flex justify-between pl-2 items-center">
      <h1>{{ dialogStore.dialogTitle }}</h1>
      <BaseButton @click="handleClose">
        <FontAwesomeIcon :icon="faClose" />
      </BaseButton>
    </header>
    <component :is="dialogStore.component" />
  </dialog>
</template>
