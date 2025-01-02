<script setup lang="ts">
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

interface Item {
  name: string
  id: string
  quantity: number
}

interface Props {
  item: Item
}

defineProps<Props>()

</script>

<template>
  <li class="border border-[#d1d2d3]/20 p-2 rounded-sm flex items-center">
    <h3>{{ item.name }}</h3>
    <span v-if="item.quantity > 1">({{ item.quantity }}x)</span>
    <div class="flex gap-2 ml-auto">
      <button class="px-2 py-1 rounded-sm bg-red-800">
        <FontAwesomeIcon :icon="faMinus" />
      </button>
      <button class="px-2 py-1 rounded-sm bg-green-800">
        <FontAwesomeIcon :icon="faPlus" />
      </button>
    </div>
  </li>
</template>
