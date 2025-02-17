<script setup lang="ts">
import IconButton from '@/components/buttons/IconButton.vue';
import ButtonIcon from '@/components/buttons/IconButton.vue';
import MainNav from '@/components/main-nav/MainNav.vue';
import NavLink from '@/components/main-nav/NavLink.vue';
import { faAngleRight, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, useTemplateRef } from 'vue';

const menuIsOpen = ref(false)

function handleOnToggleMenu(isOpen: boolean) {
  menuIsOpen.value = isOpen
}

</script>


<template>
  <header class="text-2xl tracking-wider border-b border-ash/20 flex justify-between" :class="{
    'bg-sky-1000': menuIsOpen
  }">
    <MainNav @on-toggle-menu="handleOnToggleMenu" />

    <!-- <button class="p-2" @click="handleClickMainNav">
      Shopping List
      <FontAwesomeIcon :icon="faCaretDown" />
    </button>

    <nav class="open:flex flex-col mt-12 min-w-screen bg-sky-900/50 text-ash text-lg" popover id="main-nav"
      ref="nav-ref">
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav> -->

    <IconButton :icon-def="faPlus" />

  </header>

  <main class="grow">

  </main>

</template>
