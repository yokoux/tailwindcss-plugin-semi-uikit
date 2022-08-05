<script setup lang="ts">
import NavAside from "./layouts/NavAside.vue";
import HeadBar from "./layouts/HeadBar.vue";
import FootBar from "./layouts/FootBar.vue";
import { useSiteStore } from './stores/site';
import { computed } from "vue";

const store = useSiteStore()

const styles = computed(() => {
  const basic = "w-full h-screen overflow-auto flex flex-col "
  return store.darkMode ? basic + "theme-dark bg-black" : basic + "theme-light"
})
</script>

<template>
  <div :class="styles">
    <head-bar />
    <div class="flex-1 flex">
      <nav-aside />
      <div class="flex-1 flex flex-col overflow-auto">
        <main class="flex-1 p-2">
          <router-view />
        </main>
        <foot-bar />
      </div>
    </div>
  </div>
</template>
