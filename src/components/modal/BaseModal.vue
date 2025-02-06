<script setup lang="ts">
import { useTemplateRef, watch } from 'vue';
import { useDialogStore } from '@/stores/dialog';


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
  <dialog class="open:bg-[#181818]/20 backdrop-blur-md text-[#d1d2d3] min-w-full h-full" ref='dialog-ref'
    @close="handleClose">
    <div class="bg-[#181818]">
      <header class="flex items-center justify-between border-b border-white/20 text-2xl p-2">
        <h1>Confirm delete items</h1>
      </header>
      <component :is="dialogStore.component" />
    </div>
  </dialog>
</template>
