<template>
{{posts}}
<a class="blog" v-for="item in posts" :href="withBase(item.regularPath)">
    <div class="title">{{ item.frontMatter.title }}</div>
    <div class="date">{{ item.frontMatter.date }}</div>
</a>
</template>

<script setup lang="ts">
import { useData, withBase } from "vitepress"

const posts = useData().theme.value.posts
</script>