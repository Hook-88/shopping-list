<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
  item: GroceryItemInterface
}>()

</script>

<template>
  <div class="flex items-center border border-white/20 rounded-xs">
    <h3 class="ml-4">{{ item.name }}</h3>
    &nbsp;
    <span>({{ item.quantity }}x)</span>
    <button class="p-4 ml-auto">
      <FontAwesomeIcon :icon="faCircle" />
    </button>
  </div>
</template>
