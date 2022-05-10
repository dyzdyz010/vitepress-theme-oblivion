<template>
{{posts}}
<a class="blog" v-for="item in posts" :href="withBase(item.regularPath)">
    {{item.regularPath}}
    <a :href="withBase(item.regularPath)" class="text-sky-600 hover:text-sky-700">{{ item.frontMatter.title }}</a>
    <div class="date">{{ item.frontMatter.date }}</div>
</a>
</template>

<script setup lang="ts">
import { useData, withBase } from "vitepress"

const posts = useData().theme.value.posts
</script>