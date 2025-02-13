import { ref } from 'vue'

export const useSelectMultipleIds = () => {
  const selectedIds = ref<string[]>([])

  function selectId(itemId: string) {
    selectedIds.value.push(itemId)
  }

  function deSelectId(itemId: string) {
    selectedIds.value = selectedIds.value.filter((selectedId) => selectedId !== itemId)
  }

  function toggleSelectId(itemId: string) {
    if (selectedIds.value.includes(itemId)) {
      deSelectId(itemId)

      return
    }

    selectId(itemId)
  }

  return {
    selectedIds,
    selectId,
    deSelectId,
    toggleSelectId,
  }
}
