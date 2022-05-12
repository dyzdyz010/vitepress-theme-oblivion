<template>
<div class="xl:mx-64 lg:mx-32 mx-2">
    <TagList class="mt-10 mb-20" @currentTagChanged="currentTagChanged" :current-tag="currentTag" />
    <Posts :posts="postsByTag" :current-page="currentPage" @currentPageChanged="currentPageChanged" />
</div>
</template>

<script setup lang="ts">
import { useData } from "vitepress"
import { ref, computed } from "vue"
import Posts from '../components/Posts.vue'
import TagList from '../components/TagList.vue'
import { getStorageTag, setStorageTag, getPostsByTag } from "../helpers/tags.ts"
import { getStoragePage } from "../helpers/pagination.ts"

var currentPage = ref(getStoragePage())
const allPosts = useData().theme.value.posts
const currentTag = ref(getStorageTag())
const postsByTag = computed(() => getPostsByTag(currentTag.value))


const currentTagChanged = (newTag) => {
    currentTag.value = newTag
    setStorageTag(newTag)
    currentPage.value = 1
}

const currentPageChanged = (newPageNum) => {
    currentPage.value = newPageNum
}
</script>