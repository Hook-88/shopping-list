<script setup lang="ts">
import { faCaretDown, faCaretUp, faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useSelectId } from '@/stores/selectId'
import { computed, ref, markRaw } from 'vue'
import { useShoppingList } from '@/stores/shoppingList'
import { useDialogStore } from '@/stores/dialog'
import ItemForm from '@/components/Forms/ItemForm.vue'

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
  if (isOpen.value) {
    return
  }
  selectIdStore.toggleSelect(props.item.id)
}

//Muate quantity
const shoppingListStore = useShoppingList()
const isMore = computed(() => props.item.quantity > 1)

function handleClickIncrement() {
  shoppingListStore.mutateQuantity(props.item.id, 'increment')
}

function handleClickDecrement() {
  shoppingListStore.mutateQuantity(props.item.id, 'decrement')
}

//mutate item
const isOpen = computed(() => {
  if (selectIdStore.editId === props.item.id) {
    return true
  }

  return false
})

function handleClickOpen() {
  if (isOpen.value) {
    selectIdStore.editId = null
    return
  }

  selectIdStore.editId = props.item.id
}

const dialogStore = useDialogStore()

function handleClickEdit() {
  dialogStore.open({
    component: markRaw(ItemForm),
    title: `Edit ${props.item.name}`,
    props: {
      itemData: {
        name: props.item.name,
        quantity: props.item.quantity,
        id: props.item.id
      }
    }
  })
}


</script>

<template>
  <li class="border border-[#d1d2d3]/20 p-2 rounded-sm" @click="handleClickItem" :class="isSelected && 'bg-green-800'">
    <div class="flex items-center">
      <h3>{{ item.name }}</h3>
      &nbsp;
      <span v-if="isMore">({{ item.quantity }}x)</span>
      <span v-if="isSelected" class="px-2 py-1 ml-auto">
        <FontAwesomeIcon :icon="faCheck" />
      </span>
      <button v-else class="px-2 ml-auto py-1 rounded-sm" @click.stop="handleClickOpen">
        <FontAwesomeIcon :icon="isOpen ? faCaretUp : faCaretDown" />
      </button>
    </div>
    <div v-if="isOpen" class="flex items-center mt-2 gap-4">
      <div class="flex gap-2 ml-auto">
        <button :disabled="!isMore"
          class="px-2 py-1 rounded-sm bg-red-800 disabled:text-white/50 disabled:bg-red-800/50"
          @click.stop="handleClickDecrement">
          <FontAwesomeIcon :icon="faMinus" />
        </button>
        <button class="px-2 py-1 rounded-sm bg-green-800" @click.stop="handleClickIncrement">
          <FontAwesomeIcon :icon="faPlus" />
        </button>
      </div>

      <button class="px-2 py-1 rounded-sm flex-grow bg-sky-700" @click.stop="handleClickEdit">Edit item</button>
    </div>
  </li>
</template>
