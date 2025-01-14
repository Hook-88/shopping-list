<script setup lang="ts">
import { useBanner } from '@/stores/banner'
import { ref, watch } from 'vue';


const bannerStore = useBanner()
const timer = ref<number | null>(null)

watch(() => bannerStore.isOpen,
  (open: boolean) => {

    if (timer.value) {
      clearTimeout(timer.value)
      timer.value = null
    }

    if (open) {
      timer.value = setTimeout(() => {
        bannerStore.closeBanner()
      }, 1000)
    }
  })

</script>

<template>
  <div v-if="bannerStore.isOpen"
    class="bg-green-800/50 border border-green-800 p-4 mx-4 text-center fixed inset-x-0 top-4">
    <p>{{ bannerStore.message }}</p>
  </div>
</template>
