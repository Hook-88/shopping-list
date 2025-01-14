import { defineStore } from 'pinia'
import { ref } from 'vue'

interface BannerPayload {
  message: string
}

export const useBanner = defineStore('banner', () => {
  const isOpen = ref(false)
  const message = ref('')

  function openBanner(payload: BannerPayload) {
    isOpen.value = true
    message.value = payload.message
  }

  function closeBanner() {
    isOpen.value = false
    message.value = ''
  }

  return {
    isOpen,
    message,
    openBanner,
    closeBanner,
  }
})
