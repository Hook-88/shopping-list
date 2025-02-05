<script setup lang="ts">
// import BaseList from '@/components/list/BaseList.vue'
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';
// import { useSelectIdsStore } from '@/stores/selectIds';
import { computed, ref } from 'vue';

const props = defineProps<{
    shoppingItems: GroceryItemInterface[]
}>()

const checkedIds = ref<string[]>([])

function checkId(id: string) {
    checkedIds.value.push(id)
}

function unCheckId(id: string) {
    checkedIds.value = checkedIds.value.filter(checkedId => checkedId !== id)
}

function itemIsChecked(id: string) {
    return checkedIds.value.includes(id)
}

function toggleCheckId(id: string) {
    if (checkedIds.value.includes(id)) {
        unCheckId(id)
        return
    }

    checkId(id)
}

function handleOnToggleCheck(itemId: string) {
    toggleCheckId(itemId)
}




</script>

<template>
    <div>
        <header class="text-sm">
            <button class="py-1">
                (10/10) - completed
            </button>
        </header>
        <ul class="space-y-2">
            <li v-for="(item, index) in shoppingItems" :key="index">
                <ShoppingItem :item="item" :isChecked="itemIsChecked(item.id)" @on-toggle-check="handleOnToggleCheck" />
            </li>
        </ul>
    </div>
</template>
