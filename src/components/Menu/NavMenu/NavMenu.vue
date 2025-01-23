<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { computed, ref, onMounted, onUnmounted } from 'vue'

const navIsOpen = ref(false)

const openNavButtonIcon = computed(() => {
  return navIsOpen.value ? faCaretUp : faCaretDown
})

function handleClickOpenNav() {
  navIsOpen.value = !navIsOpen.value
}

function eventHandler(event: Event) {
  if (!event.target) {
    throw new Error('Event does not have a target')
  }

  const el = event.target as HTMLElement

  if (!el.hasAttribute('popovertarget')) {
    navIsOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', eventHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', eventHandler)
})

</script>

<template>
  <button class="py-2 px-4 text-xl text-left flex items-center gap-2 tracking-wider font-bold" popovertarget="mypopover"
    @click="handleClickOpenNav">
    Shopping List
    <FontAwesomeIcon :icon="openNavButtonIcon" class="text-xl" />
  </button>
  <nav id="mypopover" popover class="border-b border-t border-[#d1d2d3]/20 border-b-[#d1d2d3]/20 p-0">
    <slot></slot>
  </nav>
</template>

<style scoped>
:popover-open {
  width: 100%;
  position: absolute;
  /* inset: unset; */
  display: flex;
  flex-direction: column;
  top: 2.75rem;
  margin: 0;
  background-color: #1c1c1c;
  color: #d1d2d3;
  font-size: 1.25rem;
}
</style>
