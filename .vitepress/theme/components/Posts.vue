<template>
    <div class="posts">
        <div v-for="(item, index) in posts"
            :class="[index == 0 ? '' : 'mt-8', 'border border-x-0 border-t-0 border-b-gray-200 pb-7']">
            <PostTitle :title="item.frontMatter.title" :date="item.frontMatter.date" :author="item.frontMatter.author"
                :tags="item.frontMatter.tags" :islink="true" :titlelink="withBase(item.regularPath)" />
        </div>
        <Pagination :current-page="currentPage" />
    </div>
</template>

<script setup lang="ts">
import PostTitle from "./PostTitle.vue"
import Pagination from "./Pagination.vue"

import { ref } from "vue"
import { useData, withBase } from "vitepress"

const posts = useData().theme.value.posts
const currentPage = ref(1)

</script>