import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'

interface ToolbarPayload {
  component: Component
  onCloceCallback: () => void
  props?: Record<string, any>
}

export const useToolbarStore = defineStore('toolbar-store', () => {
  const isOpen = ref(false)
  const component = ref<Component | null>()
  const onCloseCallback = ref<() => void | null>()
  const props = ref<Record<string, any>>({})

  function openToolbar(payload: ToolbarPayload) {
    isOpen.value = true
    component.value = payload.component
    props.value = payload.props || {}
    onCloseCallback.value = payload.onCloceCallback
  }

  function closeToolbar() {
    isOpen.value = false
    component.value = null
    props.value = {}

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
    props,
  }
})
