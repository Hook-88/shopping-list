<script setup lang="ts">
import { faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useSelectId } from '@/stores/selectId'
import { computed } from 'vue'
import { useShoppingList } from '@/stores/shoppingList'

interface Item {
  name: string
  id: string
  quantity: number
}

interface Props {
  item: Item
}

const props = defineProps<Props>()

//Select Item
const selectIdStore = useSelectId()

const isSelected = computed(() => {
  return selectIdStore.selectedIds.some(id => id === props.item.id)
})

function handleClickItem() {
  selectIdStore.deSelectAll()
  selectIdStore.selectId(props.item.id)
}

const isMore = computed(() => props.item.quantity > 1)

</script>

<template>
  <li class="border border-[#d1d2d3]/20 p-2 rounded-sm flex items-center" @click="handleClickItem"
    :class="isSelected && 'border-[#d1d2d3]'">
    <h3 class="py-1">{{ item.name }}</h3>
    &nbsp;
    <span v-if="isMore">({{ item.quantity }}x)</span>
    <span v-if="isSelected" class="px-2 py-1 ml-auto">
      <FontAwesomeIcon :icon="faCheck" />
    </span>
  </li>
</template>
