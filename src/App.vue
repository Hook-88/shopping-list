<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DialogModal from './components/Modal/DialogModal.vue'
import BaseBanner from './components/banner/BaseBanner.vue'

</script>

<template>
  <div class="h-screen flex flex-col gap-2">

    <RouterView />

    <BaseBanner />
    <footer class="text-center p-1">
      <small>&copy; 2024 Hook-88</small>
    </footer>
  </div>
  <DialogModal />


</template>
