import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'

interface DialogPayload {
  component: Component
  props?: Record<string, any>
  title?: string
}

export const useDialogStore = defineStore('dialog', () => {
  const isOpen = ref(false)
  const component = ref<Component | null>(null)
  const dialogTitle = ref('')
  const props = ref<Record<string, any>>({})

  function open(payload: DialogPayload) {
    isOpen.value = true
    props.value = payload.props || {}
    dialogTitle.value = payload.title || ''
    component.value = payload.component
  }

  function close() {
    isOpen.value = false
    props.value = {}
    dialogTitle.value = ''
    component.value = null
  }

  return {
    isOpen,
    props,
    component,
    dialogTitle,
    open,
    close,
  }
})
