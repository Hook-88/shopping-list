import { ref } from 'vue'

export const useSelectSingleId = () => {
  const selectedId = ref<string | null>()

  function selectId(id: string) {
    selectedId.value = id
  }

  function clearSelection() {
    selectedId.value = null
  }

  function toggleSelect(id: string) {
    if (selectedId.value !== id) {
      selectId(id)
      return
    }
    clearSelection()
  }

  return {
    selectedId,
    selectId,
    clearSelection,
    toggleSelect,
  }
}
