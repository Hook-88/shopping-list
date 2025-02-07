<script setup lang="ts">
import { computed, useAttrs, ref } from 'vue';

defineOptions({
  inheritAttrs: false
})

interface Props {
  label?: string
  modelValue?: string | number
  cancelGrow?: boolean
}

const attrs = useAttrs()

const props = withDefaults(defineProps<Props>(), {
  label: '',
  modelValue: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)

defineExpose({
  focus() {
    inputRef.value?.focus()
  }
})

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const containerClassName = computed(() => props.cancelGrow ? 'flex flex-col gap-0.5' : 'flex flex-col gap-0.5 grow')

</script>

<template>
  <div :class="containerClassName">
    <label v-if="label" :for="label">{{ label }}:</label>
    <input :value="modelValue" v-bind="attrs" :id="label" @input="handleInput" ref="inputRef" />
  </div>
</template>
