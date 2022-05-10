<template>
<h1 class="text-lg font-bold">{{title}}</h1>
<Content />
</template>

<script setup lang="ts">
import { useData } from "vitepress"

const title = useData().page.value.frontmatter.title
</script>