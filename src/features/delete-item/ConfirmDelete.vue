<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue'
import { useDialogStore } from '@/stores/dialog';

interface Props {
  checkedIds: string[]
}

defineProps<Props>()

const dialogStore = useDialogStore()

function handleClickCancel() {
  dialogStore.close()
}

</script>

<template>
  <main class="p-2">
    <ul>
      <li>Items to delete</li>
    </ul>
  </main>
  <footer class="flex p-2 gap-2 border-t border-ash/20">
    <BaseButton button-type="action" class="grow">Confirm</BaseButton>
    <BaseButton button-type="danger" @click="handleClickCancel">Cancel</BaseButton>
  </footer>
</template>
