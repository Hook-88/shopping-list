<script setup lang="ts">
import { type ShoppingItemInterface } from '@/types/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'


defineProps<{
  item: ShoppingItemInterface
}>()

</script>

<template>
  <div class="pl-2 border border-ash/20 rounded-xs flex items-center">
    <p>
      {{ item.name }}
      ({{ item.quantity }}x)
    </p>
    <BaseButton class="ml-auto py-4 px-4 flex items-center">
      <FontAwesomeIcon :icon="faCircle" />
    </BaseButton>
  </div>
</template>
