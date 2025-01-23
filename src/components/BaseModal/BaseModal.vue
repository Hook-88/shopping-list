<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog'
import { useTemplateRef, watch } from 'vue';

const dialogStore = useDialogStore()
const dialogRef = useTemplateRef('dialogRef')


watch(() => dialogStore.isOpen,
  (isOpen) => {
    if (isOpen) {
      dialogRef.value?.showModal()
    } else {
      dialogRef.value?.close()
    }
  })

function handleCloseModal() {
  dialogStore.close()
}


</script>

<template>
  <dialog class="mt-11 bg-[#1c1c1c] border-t border-b border-[#d1d2d3]/20 w-screen max-w-full" ref="dialogRef"
    @close="handleCloseModal">
    <component v-if="dialogStore.component" :is="dialogStore.component" v-bind="dialogStore.props" />
  </dialog>
</template>
