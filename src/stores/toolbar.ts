import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'

interface ToolbarPayload {
  component: Component
}

export const useToolbarStore = defineStore('toolbar-store', () => {
  const isOpen = ref(false)
  const component = ref<Component | null>()

  function openToolbar(payload: ToolbarPayload) {
    isOpen.value = true
    component.value = payload.component
  }

  function closeToolbar() {
    isOpen.value = false
    component.value = null
  }

  return {
    isOpen,
    openToolbar,
    closeToolbar,
    component,
  }
})
