import { ref } from 'vue'

export const useMainNav = () => {
  const menuIsOpen = ref(false)

  function handleOnToggleMenu(isOpen: boolean) {
    menuIsOpen.value = isOpen
  }

  return {
    menuIsOpen,
    handleOnToggleMenu,
  }
}
