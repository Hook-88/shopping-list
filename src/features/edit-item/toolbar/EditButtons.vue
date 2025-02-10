<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import { faEdit, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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

  <BaseButton button-type="transparant" class="py-3">
    <FontAwesomeIcon :icon="faTrash" />
  </BaseButton>
</template>
