<!-- <script setup lang="ts">
import { ref, watch } from 'vue'
import { useDialogStore } from '@/stores/dialog'

const dialogStore = useDialogStore()
const dialogRef = ref<HTMLDialogElement | null>(null)

watch(
  () => dialogStore.isOpen,
  (isOpen: boolean) => {
    if (isOpen) {
      dialogRef.value?.showModal()
    } else {
      dialogRef.value?.close()
    }
  }
)

const handleClose = (): void => {
  dialogStore.close()
}

</script>

<template>
  <dialog ref="dialogRef" @close="handleClose">
    <div @click.stop class="dialog-content">
      <header>
        <h2>{{ dialogStore.dialogTitle }}</h2>
        <button @click="handleClose">×</button>
      </header>

      <main>
        <component :is="dialogStore.component" />
      </main>
    </div>
  </dialog>
</template> -->
