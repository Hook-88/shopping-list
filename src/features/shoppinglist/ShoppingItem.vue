<script setup lang="ts">
import { useSelectIdsStore } from '@/stores/selectIds';
import { type GroceryItemInterface } from '@/types/GroceryItem'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';

const props = defineProps<GroceryItemInterface>()

const selectIdsStore = useSelectIdsStore()

const itemIdIsSelected = computed(() => selectIdsStore.selectedIds.some(selectedId => selectedId === props.id))

const shoppingItemClassName = computed(() => {
  if (itemIdIsSelected.value) {
    return "flex items-center border border-white/20 rounded-xs bg-green-800"
  }

  return "flex items-center border border-white/20 rounded-xs"
})

function handleClickItem() {
  if (itemIdIsSelected.value) {
    selectIdsStore.removeId(props.id)
    return
  }
  selectIdsStore.addId(props.id)
}


</script>

<template>
  <div :class="shoppingItemClassName" @click="handleClickItem">
    <h3 class="ml-4">{{ name }}</h3>
    &nbsp;
    <span>({{ quantity }}x)</span>
    <button class="p-4 ml-auto">
      <FontAwesomeIcon :icon="faCircle" />
    </button>
  </div>
</template>
