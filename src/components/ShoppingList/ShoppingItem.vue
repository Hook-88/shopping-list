<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faGear } from '@fortawesome/free-solid-svg-icons'
import { useSelectId } from '@/stores/selectId'
import { computed, markRaw } from 'vue'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { useToolbarStore } from '@/stores/toolbar'
import EditButtons from './EditItem/EditButtons.vue'


const props = defineProps<{
  item: {
    name: string
    quantity: number
    id: string
  }
}>()

const toolbarStore = useToolbarStore()

//select store
const selecIdStore = useSelectId()

//Check item
const isChecked = computed(() => {
  return selecIdStore.selectedIds.some(selectedId => selectedId === props.item.id)
})

function handleClickItem() {
  //deselect item to edit if selected to edit
  if (isSelectedToEdit.value) {
    selecIdStore.removeId(props.item.id, true)
    toolbarStore.close()

    return

  }

  //deselect item
  selecIdStore.removeId(props.item.id, true)
  toolbarStore.close()

  //uncheck item if checked
  if (isChecked.value) {
    selecIdStore.removeId(props.item.id)

    return
  }

  selecIdStore.addId(props.item.id)
}

//select item for edit
const isSelectedToEdit = computed(() => {
  return selecIdStore.singleSelectedId === props.item.id
})

const editItemIcon = computed(() => {
  return !isSelectedToEdit.value ? faGear : faCircle
})

function handleClickEditItem() {

  if (isSelectedToEdit.value) {
    selecIdStore.removeId(props.item.id, true)
    toolbarStore.close()
    return
  }

  selecIdStore.addId(props.item.id, true)
  toolbarStore.open({
    component: markRaw(EditButtons)
  })
}


</script>

<template>
  <div class="flex items-center border border-[#d1d2d3]/20 rounded" :class="{
    ['bg-green-800/50']: isChecked,
    ['border-white']: isSelectedToEdit
  }" @click="handleClickItem">
    <p class="ml-3">{{ item.name }}</p>
    <span v-if="item.quantity > 1">&nbsp;({{ item.quantity }}x)</span>
    <button v-if="!isChecked" class="ml-auto p-4" @click.stop="handleClickEditItem">
      <FontAwesomeIcon :icon="editItemIcon" />
    </button>
    <span v-else class="ml-auto p-4">
      <FontAwesomeIcon :icon="faCheck" />
    </span>
  </div>
</template>
