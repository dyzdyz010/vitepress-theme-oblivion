<template>
    <h1 class="text-lg font-bold">{{ title }}</h1>
    <div class="post">
        <Content />
    </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress"

const title = useData().page.value.frontmatter.title
</script>