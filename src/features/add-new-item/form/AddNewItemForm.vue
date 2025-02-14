<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';

</script>

<template>
  <form>
    <div class="flex flex-col m-3 gap-3">
      <div>
        <label for="">Item name:</label>
        <br>
        <input type="text" placeholder="item name..." class="w-full bg-ash/10 px-2 py-1 rounded-sm" required>
      </div>

      <div class="flex gap-3">
        <div class="grow">
          <label for="">Item quantity:</label>
          <br>
          <input type="number" placeholder="item quantity" class="w-full bg-ash/10 px-2 py-1 rounded-sm">
        </div>

        <div class="w-18">
          <label for="">Unit:</label>
          <br>
          <input type="string" placeholder="X" class="w-full bg-ash/10 px-2 py-1 rounded-sm">
        </div>
      </div>

      <div>
        <label for="">Label:</label>
        <br>
        <input type="text" placeholder="label" class="w-full bg-ash/10 px-2 py-1 rounded-sm">
      </div>
    </div>


    <div class="flex gap-3 border-t border-ash/20 p-2">
      <BaseButton button-type="action" class="grow">Add item</BaseButton>
      <BaseButton button-type="danger">Cancel</BaseButton>
    </div>

  </form>
</template>
