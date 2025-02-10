// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { faClose, faPlus } from '@fortawesome/free-solid-svg-icons';


</script>

<template>
  <div class="fixed bottom-8 inset-x-0 bg-[#232327] border border-white/20 rounded-xs mx-2">
    <BaseButton button-type="transparant" class="py-3">
      <FontAwesomeIcon :icon="faClose" />
    </BaseButton>
  </div>
</template>
