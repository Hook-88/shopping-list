// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useToolbarStore } from '@/stores/toolbar';


const toolbarStore = useToolbarStore()

function handleCloseToolbar() {
  toolbarStore.closeToolbar()
}


</script>

<template>
  <div class="fixed bottom-8 inset-x-0 bg-[#232327] border border-white/20 rounded-xs mx-2" v-if="toolbarStore.isOpen">
    <BaseButton button-type="transparant" class="py-3" @click="handleCloseToolbar">
      <FontAwesomeIcon :icon="faClose" />
    </BaseButton>
  </div>
</template>
