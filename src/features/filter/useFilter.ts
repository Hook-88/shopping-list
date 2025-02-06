import { ref } from 'vue'

export const useFilter = () => {
  const filter = ref<'checked' | null>()

  function setFilter(filterType: 'checked' | null = null) {
    filter.value = filterType
  }

  function clearFilter() {
    setFilter()
  }

  function toggleFilter() {
    if (filter.value) {
      clearFilter()
      return
    }

    setFilter('checked')
  }

  return {
    filter,
    setFilter,
    clearFilter,
    toggleFilter,
  }
}
