<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog';
import { useTemplateRef, watch } from 'vue';

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
  <dialog ref="dialog-ref" @close="handleClose">
    here the dialog
  </dialog>
</template>
