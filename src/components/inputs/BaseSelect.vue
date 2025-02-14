<script setup lang="ts">
interface Props {
  label?: string
  modelValue?: string | number
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}

</script>

<template>
  <label :for="label" v-if="label">
    {{ label }}
  </label>
  <br />
  <select :id="label" @change="handleChange" v-bind="$attrs">
    <option value="x">X</option>
    <option value="gr">Gr</option>
    <option value="lb">Lb</option>
  </select>
</template>
