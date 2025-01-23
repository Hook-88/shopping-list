import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectId = defineStore('select-id', () => {
  const selectedIds = ref<string[]>([])
  const singleSelectedId = ref<string | null>()

  function addId(id: string, single: boolean = false) {
    if (single) {
      singleSelectedId.value = id

      return
    }

    selectedIds.value = [id, ...selectedIds.value]
  }

  function removeId(id: string, single: boolean = false) {
    if (single) {
      singleSelectedId.value = null

      return
    }

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
