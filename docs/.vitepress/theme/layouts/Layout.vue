<template>
    <Navbar />
    <h1 class="text-3xl font-bold underline">{{title}}</h1>
    <p>{{ data }}</p>
</template>

<script setup lang='ts'>
import Navbar from '../components/Navbar.vue'
// import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

const title = useData().page.value.title
const data = useData().theme.value
</script>

<style>
</style>