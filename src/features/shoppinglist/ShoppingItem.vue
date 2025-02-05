<script setup lang="ts">
import { useSelectIdsStore } from '@/stores/selectIds';
import { useSelectSingleIdStore } from '@/stores/selectSingleId';
import { type GroceryItemInterface } from '@/types/GroceryItem'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faCircle as faCircleFill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';

const props = defineProps<{
  item: GroceryItemInterface
}>()

const selectIdsStore = useSelectIdsStore()

const itemIdIsSelected = computed(() => selectIdsStore.selectedIds.some(selectedId => selectedId === props.item.id))

const itemIdIsSingleSelected = computed(() => selectSingleIdStore.selectedId === props.item.id)

const shoppingItemClassName = computed(() => {
  if (itemIdIsSelected.value) {
    return "flex items-center border border-white/20 rounded-xs bg-green-800"
  }

  if (itemIdIsSingleSelected.value) {
    return "flex items-center border border-white/90 rounded-xs"
  }

  return "flex items-center border border-white/20 rounded-xs"
})

function handleClickItem() {
  if (itemIdIsSelected.value) {
    selectIdsStore.removeId(props.item.id)
    return
  }
  selectIdsStore.addId(props.item.id)
}


const selectSingleIdStore = useSelectSingleIdStore()

function handleClickEditItem() {
  selectSingleIdStore.toggleSelect(props.item.id)
}

const circleIcon = computed(() => {
  if (itemIdIsSingleSelected.value) {
    return faCircleFill
  }

  return faCircle
})


</script>

<template>
  <div :class="shoppingItemClassName" @click="handleClickItem">
    <h3 class="ml-4">{{ item.name }}</h3>
    &nbsp;
    <span>({{ item.quantity }}x)</span>
    <span v-if="itemIdIsSelected" class="p-4 ml-auto">
      <FontAwesomeIcon :icon="faCheck" />
    </span>
    <button v-else class="p-4 ml-auto" @click.stop="handleClickEditItem">
      <FontAwesomeIcon :icon="circleIcon" />
    </button>
  </div>
</template>
