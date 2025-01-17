import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'

interface DialogPayload {
  component: Component
}

export const useToolbarStore = defineStore('toolbar', () => {
  const isOpen = ref(false)
  const component = ref<Component | null>(null)

  function open(payload: DialogPayload) {
    isOpen.value = true
    component.value = payload.component
  }

  function close() {
    isOpen.value = false
    component.value = null
  }

  return {
    isOpen,
    component,
    open,
    close,
  }
})
