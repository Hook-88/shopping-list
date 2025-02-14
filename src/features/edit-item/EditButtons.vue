<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import { faEdit, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faMinus" />
  </BaseButton>

  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faPlus" />
  </BaseButton>

  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faEdit" />
  </BaseButton>

  <BaseButton class="grow">
    <FontAwesomeIcon :icon="faTrash" />
  </BaseButton>
</template>
