<script setup lang="ts">
import ShoppingList from '@/components/ShoppingList/ShoppingList.vue'
import { useDialogStore } from '@/stores/dialog';
import { faCaretDown, faCaretRight, faCaretUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, onMounted, onUnmounted, ref } from 'vue';
import AddNewItem from '@/components/Forms/AddNewItem/AddNewItem.vue';

const navIsOpen = ref(false)

const dialogStore = useDialogStore()

function handleClickOpenNav() {
  navIsOpen.value = !navIsOpen.value
}

const openNavButtonIcon = computed(() => {
  return navIsOpen.value ? faCaretUp : faCaretDown
})

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

function handleClickAddNewItem() {
  dialogStore.open({
    component: AddNewItem
  })
}


</script>

<template>

  <header class="border-b border-[#d1d2d3]/20 flex" :class="navIsOpen && 'bg-[#1c1c1c]'">
    <button class="py-2 px-4 text-xl text-left flex items-center gap-2 tracking-wider font-bold"
      popovertarget="mypopover" @click="handleClickOpenNav">
      Shopping List
      <FontAwesomeIcon :icon="openNavButtonIcon" class="text-xl" />
    </button>
    <nav id="mypopover" popover class="border-b border-t border-[#d1d2d3]/20 border-b-[#d1d2d3]/20 p-0">
      <RouterLink class="py-2 px-4 border-b border-[#d1d2d3]/20 flex items-center justify-between tracking-wide" to="#">
        Recipes
        <FontAwesomeIcon :icon="faCaretRight" />
      </RouterLink>
      <RouterLink class="py-2 px-4 flex items-center justify-between tracking-wide" to="/about">
        About
        <FontAwesomeIcon :icon="faCaretRight" />
      </RouterLink>
    </nav>

    <button class="px-6 ml-auto text-xl" @click="handleClickAddNewItem">
      <FontAwesomeIcon :icon="faPlus" />
    </button>
  </header>


  <main class="flex-grow px-2 flex flex-col gap-4">
    <ShoppingList />
  </main>
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
