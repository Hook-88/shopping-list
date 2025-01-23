<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useSelectId } from '@/stores/selectId'

const props = defineProps<{
  item: {
    name: string
    quantity: number
    id: string
  }
}>()

const selecIdStore = useSelectId()

function handleClickItem() {
  if (selecIdStore.selectedIds.some(selectedId => selectedId === props.item.id)) {
    selecIdStore.removeId(props.item.id)

    return
  }

  selecIdStore.addId(props.item.id)
}

</script>

<template>
  <div class="flex items-center border border-[#d1d2d3]/20 rounded" @click="handleClickItem">
    <p class="ml-3">{{ item.name }}</p>
    <span v-if="item.quantity > 1">&nbsp;({{ item.quantity }}x)</span>
    <FontAwesomeIcon :icon="faGear" class="ml-auto p-4" />
  </div>
</template>
