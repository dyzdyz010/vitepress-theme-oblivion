<template>
    <div class="posts">
        <div v-for="(item, index) in pagePosts"
            :class="[index == 0 ? '' : 'mt-8', 'border border-x-0 border-t-0 border-b-gray-200 pb-7']">
            <PostTitle :title="item.frontMatter.title" :date="item.frontMatter.date" :author="item.frontMatter.author"
                :tags="item.frontMatter.tags" :islink="true" :titlelink="withBase(item.regularPath)" />
        </div>
        <Pagination :current-page="currentPage" @currentPageChanged="currentPageChanged" :posts="posts" />
    </div>
</template>

<script setup lang="ts">
import PostTitle from "./PostTitle.vue"
import Pagination from "./Pagination.vue"

import { getStoragePage, setStoragePage, getPostsOnPage } from "../helpers/pagination.ts"

import { ref, computed } from "vue"
import { useData, withBase } from "vitepress"

const props = defineProps({
    posts: Array,
    currentPage: Number
})

const emit = defineEmits(['currentPageChanged'])

const pagePosts = computed(() => getPostsOnPage(props.posts, props.currentPage))

const currentPageChanged = (newPageNum) => {
    // props.currentPage = newPageNum
    setStoragePage(newPageNum)
    setTimeout(() => {
        window.scrollTo(0, 0)
    }, 100)
    emit('currentPageChanged', newPageNum)
}

</script>