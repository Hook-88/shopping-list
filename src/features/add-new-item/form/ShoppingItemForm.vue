<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseInput from '@/components/input/BaseInput.vue';

</script>

<template>
  <form class="flex flex-col gap-4 mt-2">
    <main class="mx-2">
      <BaseInput label="Item name" class="bg-white/20" />
    </main>
    <footer class="flex items-center justify-between py-2 gap-2 border-t border-white/20 px-2">
      <BaseButton class="grow">Add item</BaseButton>
      <BaseButton button-type="danger">Cancel</BaseButton>
    </footer>
  </form>
</template>
