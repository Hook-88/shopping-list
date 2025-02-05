import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectSingleIdStore = defineStore('select-single-id', () => {
  const selectedId = ref<string | null>()

  function toggleSelect(id: string) {
    if (selectedId.value === id) {
      selectedId.value = null
      return
    }

    selectedId.value = id
  }

  function clearSelection() {
    selectedId.value = null
  }

  return {
    selectedId,
    toggleSelect,
    clearSelection,
  }
})
