import { ref } from 'vue'

export const useSelectSingleId = () => {
  const selectedId = ref<string | null>(null)

  function selectId(itemId: string) {
    selectedId.value = itemId
  }

  function clearSelection() {
    selectedId.value = null
  }

  function toggleSelectId(itemId: string) {
    if (selectedId.value === itemId) {
      clearSelection()
      return
    }

    selectId(itemId)
  }

  return {
    selectedId,
    selectId,
    toggleSelectId,
    clearSelection,
  }
}
