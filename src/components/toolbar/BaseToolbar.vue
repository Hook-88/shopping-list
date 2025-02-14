<script setup lang="ts">
import BaseButton from '../buttons/BaseButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useToolbarStore } from '@/stores/toolbar';

const toolbarStore = useToolbarStore()

</script>

<template>
  <div v-if="toolbarStore.isOpen" class="fixed inset-x-0 bottom-4 bg-obsidian text-ash">
    <BaseButton>
      <FontAwesomeIcon :icon="faClose" />
    </BaseButton>
  </div>
</template>
