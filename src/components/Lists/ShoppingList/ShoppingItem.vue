<script setup lang="ts">
import { faCheck, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useSelectId } from '@/stores/selectId'
import { computed, markRaw } from 'vue'
import { useToolbarStore } from '@/stores/toolbar'
import EditItemButtons from './EditItemButtons/EditItemButtons.vue'

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
  if (isSelectedForEdit.value) {
    selectIdStore.editId = null
    toolbarStore.close()
    return
  }
  selectIdStore.toggleSelect(props.item.id)
}

//Select item for edit
const isSelectedForEdit = computed(() => {
  return selectIdStore.editId === props.item.id
})

const toolbarStore = useToolbarStore()

function handleClickSelectToEdit() {
  if (selectIdStore.editId === props.item.id) {
    selectIdStore.editId = null
    toolbarStore.close()
    return
  }

  selectIdStore.selectId(props.item.id, true)
  toolbarStore.open({
    component: markRaw(EditItemButtons)

  })
}

const isMore = computed(() => props.item.quantity > 1)

</script>

<template>
  <li class="border border-[#d1d2d3]/20 p-2 rounded-sm" @click="handleClickItem" :class="{
    ['bg-green-800']: isSelected,
    ['border border-white/80']: isSelectedForEdit
  }">
    <div class="flex items-center">
      <h3 v-if="isSelectedForEdit">Edit -&nbsp;</h3>
      <h3>{{ item.name }}</h3>
      &nbsp;
      <span v-if="isMore">({{ item.quantity }}x)</span>
      <span v-if="isSelected" class="px-2 py-1 ml-auto">
        <FontAwesomeIcon :icon="faCheck" />
      </span>
      <button v-else class="px-2 ml-auto py-1 rounded-sm" @click.stop="handleClickSelectToEdit">
        <FontAwesomeIcon :icon="faGear" />
      </button>
    </div>
  </li>
</template>
