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
  selectIdStore.toggleSelect(props.item.id)
}

//Muate quantity
const shoppingListStore = useShoppingList()

function handleClickIncrement() {
  shoppingListStore.mutateQuantity(props.item.id, 'increment')
}

function handleClickDecrement() {
  shoppingListStore.mutateQuantity(props.item.id, 'decrement')
}

</script>

<template>
  <li class="border border-[#d1d2d3]/20 p-2 rounded-sm flex items-center" @click="handleClickItem"
    :class="isSelected && 'bg-green-800'">
    <h3>{{ item.name }}</h3>
    <span v-if="item.quantity > 1">({{ item.quantity }}x)</span>
    <span v-if="isSelected" class="px-2 py-1 ml-auto">
      <FontAwesomeIcon :icon="faCheck" />
    </span>

    <div v-else class="flex gap-2 ml-auto">
      <button class="px-2 py-1 rounded-sm bg-red-800" @click.stop="handleClickDecrement">
        <FontAwesomeIcon :icon="faMinus" />
      </button>
      <button class="px-2 py-1 rounded-sm bg-sky-700" @click.stop="handleClickIncrement">
        <FontAwesomeIcon :icon="faPlus" />
      </button>
    </div>
  </li>
</template>
