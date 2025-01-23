import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'

interface DialogPayload {
  component: Component
  props?: Record<string, any>
}

export const useToolbarStore = defineStore('toolbar', () => {
  const isOpen = ref(false)
  const component = ref<Component | null>(null)
  const props = ref<Record<string, any>>({})

  function open(payload: DialogPayload) {
    isOpen.value = true
    props.value = payload.props || {}
    component.value = payload.component
  }

  function close() {
    isOpen.value = false
    props.value = {}
    component.value = null
  }

  return {
    isOpen,
    props,
    component,
    open,
    close,
  }
})
