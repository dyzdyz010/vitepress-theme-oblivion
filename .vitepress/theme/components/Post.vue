<template>
    <transition appear enter-active-class="transition ease-in-out duration-300"
        enter-from-class="transform opacity-0 -translate-y-3" enter-to-class="opacity-100">
        <div class="ml-72 mr-10 mt-20">
            <PostTitle :title="title" :date="date" :author="author" :tags="tags" :islink="false" :titlelink="''" />
            <div class="post mt-16">
                <Content />
            </div>
        </div>
    </transition>
    <TOC />
</template>

<script setup lang="ts">
import PostTitle from "./PostTitle.vue"
import TOC from "./TOC.vue"
import { useData } from "vitepress"

const title = useData().page.value.frontmatter.title
const author = useData().page.value.frontmatter.author
const tags = useData().page.value.frontmatter.tags
const date = useData().page.value.frontmatter.date

</script>