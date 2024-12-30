<script setup lang="ts">
import BaseForm from '../Forms/BaseForm.vue'
</script>

<template>
  <dialog class="bg-transparent h-screen w-screen">
    <div class="h-screen w-screen backdrop-blur flex items-center justify-center">
      <div class="p-4 bg-[#181818] border border-[#d1d2d3]/20 rounded-sm">
        <BaseForm />
      </div>
    </div>
  </dialog>
</template>
