<template>
    <div class="ml-64 mt-20">
        <PostTitle :title="title" :date="date" :author="author" :tags="tags" :islink="false" :titlelink="''" />
        <div class="post mt-16">
            <Content />
        </div>
    </div>
</template>

<script setup lang="ts">
import PostTitle from "./PostTitle.vue"
import { useData } from "vitepress"

const title = useData().page.value.frontmatter.title
const author = useData().page.value.frontmatter.author
const tags = useData().page.value.frontmatter.tags
const date = useData().page.value.frontmatter.date

</script>