import { ref } from 'vue'

export const useSelectMultipleIds = () => {
  const selectedIds = ref<string[]>([])

  function selectId(id: string) {
    selectedIds.value.push(id)
  }

  function deselectId(id: string) {
    selectedIds.value = selectedIds.value.filter((selectedId) => selectedId !== id)
  }

  function toggleSelectId(id: string) {
    if (selectedIds.value.includes(id)) {
      deselectId(id)
      return
    }

    selectId(id)
  }

  function clearSelection() {
    selectedIds.value = []
  }

  return {
    selectedIds,
    selectId,
    deselectId,
    toggleSelectId,
    clearSelection,
  }
}
