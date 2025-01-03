import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectId = defineStore('select-id', () => {
  const selectedIds = ref<string[]>([])
  const editId = ref<string | null>(null)

  function selectId(id: string, isEditId: boolean = false) {
    if (isEditId) {
      editId.value = id
      return
    }
    selectedIds.value.push(id)
  }

  function deSelectId(id: string) {
    const arr = selectedIds.value.filter((selectID) => selectID !== id)
    selectedIds.value = arr
  }

  function toggleSelect(id: string) {
    const isSelected = selectedIds.value.some((selectedId) => selectedId === id)
    if (isSelected) {
      deSelectId(id)
    } else {
      selectId(id)
    }
  }

  function deSelectAll() {
    selectedIds.value = []
  }

  return {
    selectedIds,
    editId,
    selectId,
    deSelectId,
    toggleSelect,
    deSelectAll,
  }
})
