<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useSelectId } from '@/stores/selectId'
import { computed } from 'vue';

const props = defineProps<{
  item: {
    name: string
    quantity: number
    id: string
  }
}>()

//Check item
const selecIdStore = useSelectId()
const isChecked = computed(() => {
  return selecIdStore.selectedIds.some(selectedId => selectedId === props.item.id)
})

function handleClickItem() {
  if (isChecked.value) {
    selecIdStore.removeId(props.item.id)

    return
  }

  selecIdStore.addId(props.item.id)
}

</script>

<template>
  <div class="flex items-center border border-[#d1d2d3]/20 rounded" :class="isChecked && 'bg-green-800/50'"
    @click="handleClickItem">
    <p class="ml-3">{{ item.name }}</p>
    <span v-if="item.quantity > 1">&nbsp;({{ item.quantity }}x)</span>
    <FontAwesomeIcon :icon="faGear" class="ml-auto p-4" />
  </div>
</template>
