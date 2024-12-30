<script setup lang="ts">
import { useTemplateRef, watch } from 'vue';
import BaseForm from '../Forms/BaseForm.vue'
import { useDialogStore } from '@/stores/dialog'

const dialogStore = useDialogStore()

const dialogRef = useTemplateRef('dialogRef')

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

function closeModal() {
  dialogStore.close()
}

</script>

<template>
  <dialog ref="dialogRef" @close="closeModal"
    class="w-full h-full bg-transparent backdrop:backdrop-blur flex items-center justify-center">
    <div class="p-4 bg-[#181818] border border-[#d1d2d3]/20 rounded-sm">
      <BaseForm />
    </div>
  </dialog>
</template>
