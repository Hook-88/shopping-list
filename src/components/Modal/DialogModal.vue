<script setup lang="ts">
import { useTemplateRef, watch } from 'vue';
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
  <dialog ref="dialogRef" @close="closeModal" class="w-full h-full bg-transparent">
    <div class="h-full w-full flex flex-col items-stretch justify-start text-[#d1d2d3]">

      <div class="p-4 pt-2 bg-[#181818] border border-[#d1d2d3]/20 rounded-sm mt-16">
        <h2 v-if="dialogStore.dialogTitle" class="self-start text-lg border-b border-[#d1d2d3]/20 mb-4">{{
          dialogStore.dialogTitle }}:</h2>
        <component :is="dialogStore.component" v-bind="dialogStore.props"></component>
      </div>

    </div>
  </dialog>
</template>
