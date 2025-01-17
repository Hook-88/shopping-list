<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faMinus, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DropdownMenu from '../DropdownMenu/DropdownMenu.vue'
import MenuItem from '../DropdownMenu/MenuItem.vue'
import { useToolbarStore } from '@/stores/toolbar';

const toolbarStore = useToolbarStore()


</script>

<template>
  <div class="fixed inset-x-0 bottom-10 ml-2 flex gap-2" v-if="toolbarStore.isOpen">
    <button class="px-4 py-2 rounded-sm bg-green-800 flex-grow">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
    <button class="px-4 py-2 rounded-sm bg-red-800 disabled:text-white/50 disabled:bg-red-800/50 flex-grow">
      <FontAwesomeIcon :icon="faMinus" />
    </button>
    <DropdownMenu :is-on-bottom-sreen="true">
      <template v-slot:button>
        <FontAwesomeIcon :icon="faCaretDown" class="px-4 py-4 rounded-sm bg-sky-700" />
      </template>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Delete</MenuItem>

    </DropdownMenu>
  </div>
</template>
