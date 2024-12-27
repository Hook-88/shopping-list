<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

// const dialogRef = useTemplateRef('dialog')

</script>

<template>
  <div class="h-screen flex flex-col gap-2">

    <RouterView />


    <footer class="text-center p-1">
      <small>&copy; 2024 Hook-88</small>
    </footer>
    <!-- TODO ADD dialog ref to open en close -->
  </div>


</template>
