// import { defineStore } from 'pinia'
// import { ref, markRaw } from 'vue'
// import type { Component } from 'vue'

// interface DialogPayload {
//   component: Component
//   title?: string
// }

// export const useDialogStore = defineStore('dialog', () => {
//   const isOpen = ref(false)
//   const component = ref<Component | null>(null)
//   const dialogTitle = ref('')

//   function open(payload: DialogPayload): void {
//     component.value = markRaw(payload.component)
//     dialogTitle.value = payload.title || ''
//     isOpen.value = true
//   }

//   function close(): void {
//     isOpen.value = false
//     component.value = null
//     dialogTitle.value = ''
//   }

//   return {
//     isOpen,
//     component,
//     dialogTitle,
//     open,
//     close,
//   }
// })
