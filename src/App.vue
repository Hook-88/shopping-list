<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BaseModal from './components/BaseModal/BaseModal.vue'

</script>

<template>
  <div class="h-screen flex flex-col gap-2">

    <RouterView />
    <BaseModal />


    <footer class="text-center p-1">
      <small>&copy; 2024 Hook-88</small>
    </footer>
  </div>

</template>
