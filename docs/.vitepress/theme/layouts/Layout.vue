<template>
    <h1>{{title}}</h1>
    <Content />
</template>

<script setup lang='ts'>
import { useData } from "vitepress";

const title = useData().page.value.title
</script>

<style scoped>
body {
    background-color: #111 !important;
}
</style>