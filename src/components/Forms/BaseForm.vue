<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { useDialogStore } from '@/stores/dialog'

const dialogStore = useDialogStore()

function handleClickClose() {
  dialogStore.close()
}

</script>

<template>
  <form>
    <label for="" class="text-[#d1d2d3] block">Name list:</label>
    <input type="text" placeholder="test" required
      class="px-2 py-1 rounded-sm bg-[#1f1f1f] border border-[#d1d2d3]/20 text-[#d1d2d3]" />
    <div class="mt-6 flex gap-2">
      <button class="py-2 px-4 rounded bg-green-800 flex-grow">Add list</button>
      <button @click="handleClickClose" class="py-2 px-4 rounded bg-red-800" type="button">
        <FontAwesomeIcon :icon="faClose" />
      </button>
    </div>
  </form>
</template>
