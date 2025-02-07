<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseSelect from '@/components/input/BaseSelect.vue';
import { useDialogStore } from '@/stores/dialog';

const dialogStore = useDialogStore()

function handleClickCancel() {
  dialogStore.close()
}


</script>

<template>
  <form class="flex flex-col gap-4 mt-2 w-full">
    <main class="mx-2 flex flex-col gap-2.5">
      <BaseInput label="Item name" class="bg-white/10 rounded-sm py-1 px-2" required />
      <div class="flex gap-2">
        <BaseInput :cancel-grow="true" label="Item quantity" class="bg-white/10 rounded-sm py-1 px-2 w-24"
          type="number" />
        <BaseSelect label="Item unit" class="bg-white/10 rounded-sm py-1.5 px-2" />
      </div>
      <BaseInput label="Item label" class="bg-white/10 rounded-sm py-1 px-2" />
    </main>
    <footer class="flex items-center justify-between py-2 gap-2 border-t border-white/20 px-2">
      <BaseButton class="grow">Add item</BaseButton>
      <BaseButton button-type="danger" type="button" @click="handleClickCancel">Cancel</BaseButton>
    </footer>
  </form>
</template>
