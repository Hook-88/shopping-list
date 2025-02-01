<script setup lang="ts">
import { ref } from 'vue'
import FilterButton from '@/components/Buttons/FilterButton.vue'

const props = defineProps<{
  labelArr: string[]
}>()

const selectedLabelFilters = ref<string[]>([])


function handleClickLabelFilter(label: string) {
  emit('on-toggle-filter', label)
}

const emit = defineEmits<{
  (event: 'on-clear-filter'): void,
  (event: 'on-toggle-filter', value: string): void
}>()

function handleClickClearFilter() {
  emit('on-clear-filter')
}

//Add bg color on selected

</script>

<template>
  <div class="flex items-center flex-wrap justify-start gap-1 mb-2" v-if="props.labelArr.length > 0">
    <FilterButton @click="handleClickClearFilter" :class="{ ['bg-sky-900']: selectedLabelFilters.length === 0 }">
      All
    </FilterButton>
    <FilterButton v-for="(label, index) in props.labelArr" :key="index" @click="() => handleClickLabelFilter(label)"
      :class="{
        ['bg-sky-800']: selectedLabelFilters.some(selectedLabel => selectedLabel === label)
      }">
      {{ label }}
    </FilterButton>
  </div>
</template>
