import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectIdsStore = defineStore('select-ids', () => {
  const selectedIds = ref<string[]>([])

  function addId(id: string) {
    selectedIds.value.push(id)
  }

  function removeId(id: string) {
    selectedIds.value = selectedIds.value.filter((selectedId) => selectedId !== id)
  }

  return {
    selectedIds,
    addId,
    removeId,
  }
})
