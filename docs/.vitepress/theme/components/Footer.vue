<template>
    <footer class="text-center align-bottom text-gray-500 font-normal text-lg">
        <span>Powered by </span>
        <a href="https://github.com/dyzdyz010/vitepress-theme-oblivion" target="_blank"
            class="text-sky-600 hover:text-sky-700"> vitepress-theme-oblivion</a>

        <span class="mx-3">|</span>

        <span>Copyright</span>
        <a href="https://github.com/clark-cui/" target="_blank" title="作者" class="ml-3 text-sky-600 hover:text-sky-700">dyzdyz010</a>
        | Copyright © 2022 - {{ year }} | MIT License
    </footer>
</template>

<script setup lang="ts">
import DynamicIcon from '../components/DynamicIcon.vue'

const year = (new Date()).getFullYear()
</script>