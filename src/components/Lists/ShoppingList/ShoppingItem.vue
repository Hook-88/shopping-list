<script setup lang="ts">
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useSelectId } from '@/stores/selectId'
import { computed } from 'vue'

interface Item {
  name: string
  id: string
  quantity: number
}

interface Props {
  item: Item
}

const props = defineProps<Props>()

const selectIdStore = useSelectId()

const isSelected = computed(() => {
  return selectIdStore.selectedIds.some(id => id === props.item.id)
})

function handleClickItem() {
  selectIdStore.toggleSelect(props.item.id)
}



</script>

<template>
  <li class="border border-[#d1d2d3]/20 p-2 rounded-sm flex items-center" @click="handleClickItem"
    :class="isSelected && 'bg-green-800'">
    <h3>{{ item.name }}</h3>
    <span v-if="item.quantity > 1">({{ item.quantity }}x)</span>
    <div class="flex gap-2 ml-auto">
      <button class="px-2 py-1 rounded-sm bg-red-800">
        <FontAwesomeIcon :icon="faMinus" />
      </button>
      <button class="px-2 py-1 rounded-sm bg-sky-700">
        <FontAwesomeIcon :icon="faPlus" />
      </button>
    </div>
  </li>
</template>
