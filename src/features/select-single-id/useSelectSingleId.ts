import { ref } from 'vue'

export const useSelectSingleId = () => {
  const selectedId = ref<string | null>()

  function selectId(id: string) {
    selectedId.value = id
  }

  function clearSelection() {
    selectedId.value = null
  }

  return {
    selectedId,
    selectId,
    clearSelection,
  }
}
