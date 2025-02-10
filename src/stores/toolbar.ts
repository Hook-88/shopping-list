import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'

interface ToolbarPayload {
  component: Component
  onCloceCallback: () => void
}

export const useToolbarStore = defineStore('toolbar-store', () => {
  const isOpen = ref(false)
  const component = ref<Component | null>()
  const onCloseCallback = ref<() => void | null>()

  function openToolbar(payload: ToolbarPayload) {
    isOpen.value = true
    component.value = payload.component
    onCloseCallback.value = payload.onCloceCallback
  }

  function closeToolbar() {
    isOpen.value = false
    component.value = null

    if (onCloseCallback.value) {
      onCloseCallback.value()
    }
  }

  return {
    isOpen,
    openToolbar,
    closeToolbar,
    component,
    onCloseCallback,
  }
})
