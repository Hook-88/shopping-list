import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectId = defineStore('select-id', () => {
  const selectedIds = ref<string[]>([])

  function addId(id: string) {
    selectedIds.value = [id, ...selectedIds.value]
  }

  function removeId(id: string) {
    if (selectedIds.value.length === 0) {
      throw new Error("There's no id to remove...")
    }

    selectedIds.value = selectedIds.value.filter((selectedId) => selectedId !== id)
  }

  return {
    selectedIds,
    addId,
    removeId,
  }
})
