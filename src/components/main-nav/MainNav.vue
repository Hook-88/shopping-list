<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { onMounted, useTemplateRef } from 'vue';
import NavLink from '@/components/main-nav/NavLink.vue';

const navRef = useTemplateRef('nav-ref')

const emit = defineEmits<{
  (e: 'on-toggle-menu', isOpen: boolean): void
}>()

onMounted(() => {
  if (navRef.value) {
    navRef.value?.addEventListener("toggle", (event: ToggleEvent) => {
      if (event.newState === "open") {
        emit('on-toggle-menu', true)
      } else {
        emit('on-toggle-menu', false)
      }
    })
  }
})

</script>

<template>
  <button class="p-2" popovertarget="main-nav">
    Shopping List
    <FontAwesomeIcon :icon="faCaretDown" />
  </button>

  <nav class="open:flex flex-col mt-12 min-w-screen border-t border-ash/20 bg-sky-1000 text-ash text-lg" popover=""
    id="main-nav" ref="nav-ref">
    <NavLink to="/recipes">Recipes</NavLink>
    <NavLink to="/about">About</NavLink>
  </nav>
</template>
