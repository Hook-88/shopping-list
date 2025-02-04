<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<GroceryItemInterface & {
  isChecked?: boolean
}>()

</script>

<template>
  <div class="flex items-center border border-white/20 rounded-xs" :class="{
    ['bg-green-800']: isChecked
  }">
    <h3 class="ml-4">{{ name }}</h3>
    &nbsp;
    <span>(x)</span>
    <button class="p-4 ml-auto">
      <FontAwesomeIcon :icon="faCircle" />
    </button>
  </div>
</template>
