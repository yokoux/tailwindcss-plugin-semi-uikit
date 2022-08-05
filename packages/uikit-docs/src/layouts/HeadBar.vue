<template>
    <header class="w-full h-12 flex items-center p-2 border-b">
        <button @click="store.switchTheme(false)" >Light</button>
        <button @click="store.switchTheme(true)">Dark</button>
    </header>

</template>

<script setup lang="ts">
import { useSiteStore } from '../stores/site';

const store = useSiteStore()
</script>