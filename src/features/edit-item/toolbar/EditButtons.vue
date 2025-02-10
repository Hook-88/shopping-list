<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import { useShoppingItemsStore } from '@/stores/shoppingItems';
import { useToolbarStore } from '@/stores/toolbar';
import { faEdit, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const props = defineProps<{
  itemId: string
}>()

const shoppingListStore = useShoppingItemsStore()
const toolbarStore = useToolbarStore()

function deleteItem(itemId: string) {
  shoppingListStore.deleteItem(itemId)
}

function handleClickDelete() {
  deleteItem(props.itemId)
  toolbarStore.closeToolbar()
}

</script>

<template>
  <BaseButton button-type="transparant" class="py-3">
    <FontAwesomeIcon :icon="faPlus" />
  </BaseButton>

  <BaseButton button-type="transparant" class="py-3">
    <FontAwesomeIcon :icon="faMinus" />
  </BaseButton>

  <BaseButton button-type="transparant" class="py-3">
    <FontAwesomeIcon :icon="faEdit" />
  </BaseButton>

  <BaseButton button-type="transparant" class="py-3" @click="handleClickDelete">
    <FontAwesomeIcon :icon="faTrash" />
  </BaseButton>
</template>
