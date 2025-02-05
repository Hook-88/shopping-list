<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useShoppingItem } from './shoppingItem';

const props = defineProps<{
  item: GroceryItemInterface
}>()

const { shoppingItemClassName, circleIcon, handleClickEditItem, handleClickItem, itemIdIsSelected } = useShoppingItem(props.item.id)

</script>

<template>
  <div :class="shoppingItemClassName" @click="handleClickItem">
    <h3 class="ml-4">{{ props.item.name }}</h3>
    &nbsp;
    <span>({{ props.item.quantity }}x)</span>
    <span v-if="itemIdIsSelected" class="p-4 ml-auto">
      <FontAwesomeIcon :icon="faCheck" />
    </span>
    <button v-else class="p-4 ml-auto" @click.stop="handleClickEditItem">
      <FontAwesomeIcon :icon="circleIcon" />
    </button>
  </div>
</template>
