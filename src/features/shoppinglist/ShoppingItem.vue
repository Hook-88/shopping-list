<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircle as faCircleFill } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
    item: GroceryItemInterface
    isChecked: boolean
    isSelectedToEdit: boolean
}>()

const emit = defineEmits<{
    (e: 'onToggleCheck', id: string): void
    (e: 'onEditItem', id: string): void
}>()

const shoppingItemClassName = computed(() => {
    if (props.isChecked) {
        return "flex items-center border border-white/20 rounded-xs bg-green-800"
    }

    if (props.isSelectedToEdit) {
        return "flex items-center border border-white/80 rounded-xs"
    }

    return "flex items-center border border-white/20 rounded-xs"
})


function handleClickItem() {
    emit('onToggleCheck', props.item.id)
}

function handleClickEditItem() {
    emit('onEditItem', props.item.id)
}


const editButtonIcon = computed(() => {
    if (props.isSelectedToEdit) {
        return faCircleFill
    }

    return faCircle
})

</script>

<template>
    <div :class="shoppingItemClassName" @click="handleClickItem">
        <h3 class="ml-4">{{ props.item.name }}</h3>
        &nbsp;
        <span>({{ props.item.quantity }}x)</span>
        <span v-if="isChecked" class="p-4 ml-auto">
            <FontAwesomeIcon :icon="faCheck" />
        </span>
        <button class="p-4 ml-auto" v-else @click.stop="handleClickEditItem">
            <FontAwesomeIcon :icon="editButtonIcon" />
        </button>
    </div>
</template>
