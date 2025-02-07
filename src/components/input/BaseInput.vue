<script setup lang="ts">
import { computed, useAttrs, ref } from 'vue';

// prevent class to be apllied to div
defineOptions({
  inheritAttrs: false
})
const attrs = useAttrs()

//Props
interface Props {
  label?: string
  modelValue?: string | number
  cancelGrow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  modelValue: ''
})

//Emit for v-model in parent component
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

//for exposing focus
const inputRef = ref<HTMLInputElement | null>(null)

defineExpose({
  focus() {
    inputRef.value?.focus()
  }
})

//Fix for not applying flex-grow
const containerClassName = computed(() => props.cancelGrow ? 'flex flex-col gap-0.5' : 'flex flex-col gap-0.5 grow')

</script>

<template>
  <div :class="containerClassName">
    <label v-if="label" :for="label">{{ label }}:</label>
    <input :value="modelValue" v-bind="attrs" :id="label" @input="handleInput" ref="inputRef"
      class="border border-white/10" />
  </div>
</template>
