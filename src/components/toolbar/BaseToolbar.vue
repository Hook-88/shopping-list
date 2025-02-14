<script setup lang="ts">
import BaseButton from '../buttons/BaseButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useToolbarStore } from '@/stores/toolbar';

const toolbarStore = useToolbarStore()

function handleClickClose() {
  toolbarStore.close()
  toolbarStore.props.onCloseCalback()
}

</script>

<template>
  <div v-if="toolbarStore.isOpen"
    class="fixed inset-x-0 bottom-4 bg-obsidian-100 text-ash border border-ash/20 mx-2 flex">
    <component :is="toolbarStore.component" />
    <BaseButton class="grow" @click="handleClickClose">
      <FontAwesomeIcon :icon="faClose" />
    </BaseButton>
  </div>
</template>
