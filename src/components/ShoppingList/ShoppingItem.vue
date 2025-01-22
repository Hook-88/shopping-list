<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


defineProps<{
  item: {
    name: string
    quantity: number
  }
}>()

</script>

<template>
  <div class="flex items-center border border-[#d1d2d3]/20 rounded">
    <p class="ml-3">{{ item.name }}</p>
    <span v-if="item.quantity > 1">&nbsp;({{ item.quantity }}x)</span>
    <FontAwesomeIcon :icon="faGear" class="ml-auto p-4" />
  </div>
</template>
