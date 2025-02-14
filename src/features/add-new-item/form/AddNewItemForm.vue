<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';

</script>

<template>
  <form>
    <div class="flex flex-col m-2 gap-3 mb-4">
      <div>
        <BaseInput label="Name" type="text" placeholder="Item name..." />
      </div>


      <div class="flex gap-3">
        <div class="grow">
          <BaseInput label="Quantity" type="number" />
        </div>

        <div class="w-18">
          <BaseInput label="Unit" type="text" />
        </div>
      </div>
      <div>
        <BaseInput label="Label" type="text" placeholder="label..." />
      </div>
    </div>


    <div class="flex gap-3 border-t border-ash/20 p-2">
      <BaseButton button-type="action" class="grow">Add item</BaseButton>
      <BaseButton button-type="danger">Cancel</BaseButton>
    </div>

  </form>
</template>
