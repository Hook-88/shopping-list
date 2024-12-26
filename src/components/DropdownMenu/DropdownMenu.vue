<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'

const isOpen = ref<boolean>(false)
const dropdownRef = useTemplateRef('dropdown')

function toggleOpen() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleClickDocument(event: MouseEvent) {
  // check if dropdownRef has the menu as value
  // check if dropwdown.value does not contain the element that was clicked
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeMenu()
  }
}

onMounted(() => {
  //To close menu on outside click
  document.addEventListener('click', handleClickDocument)
})

onUnmounted(() => {
  //Remove event to prevent memory leak
  document.removeEventListener('click', handleClickDocument)
})

</script>

<template>
  <div class="relative grid" ref="dropdown">
    <button class="flex items-center justify-end pr-2" @click="toggleOpen">
      <slot name="button">
        <FontAwesomeIcon :icon="faBars" />
      </slot>
    </button>
    <ul @click="closeMenu" v-if="isOpen" class="
          absolute text-xl text-nowrap text-right
          border border-[#d1d2d3]/20 rounded-sm
          right-1 top-9
          backdrop backdrop-blur-sm
        ">
      <slot></slot>
    </ul>
  </div>
</template>
