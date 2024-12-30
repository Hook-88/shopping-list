import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'

interface DialogPayload {
  title?: string
  component: Component
}

export const useDialogStore = defineStore('dialog', () => {
  const isOpen = ref(false)
  const component = ref<Component | null>(null)
  const dialogTitle = ref('')

  function open(payload: DialogPayload) {
    isOpen.value = true
    dialogTitle.value = payload.title || ''
    component.value = payload.component
  }

  function close() {
    isOpen.value = false
    dialogTitle.value = ''
    component.value = null
  }

  return {
    isOpen,
    component,
    dialogTitle,
    open,
    close,
  }
})
