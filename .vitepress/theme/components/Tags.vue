<template>
    <div class="xl:mx-64 lg:mx-32 mx-2">
        <transition appear enter-active-class="transition ease-out duration-300"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
            <h1 class="text-center text-gray-700 text-4xl font-bold my-10">Tags</h1>
        </transition>
        <transition appear enter-active-class="transition ease-out duration-300 delay-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
            <TagList class="mt-10 mb-20" @currentTagChanged="currentTagChanged" :current-tag="currentTag" />
        </transition>
        <transition appear enter-active-class="transition ease-out duration-300 delay-150"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
            <Posts :posts="postsByTag" :current-page="currentPage" @currentPageChanged="currentPageChanged" />
        </transition>
    </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress"
import { ref, computed, watchEffect } from "vue"
import Posts from './Posts.vue'
import TagList from './TagList.vue'
import { getStorageTag, setStorageTag, getPostsByTag } from "../helpers/tags.ts"
import { getStoragePage } from "../helpers/pagination.ts"

const currentPage = ref(getStoragePage())
const allPosts = useData().theme.value.posts
const currentTag = ref(getStorageTag())
const postsByTag = computed(() => getPostsByTag(currentTag.value))


watchEffect(() => {
    if (window.location.hash) {
        currentTag.value = window.location.hash.replace('#', '');
    }
})

const currentTagChanged = (newTag) => {
    currentTag.value = newTag
    setStorageTag(newTag)
    currentPage.value = 1
}

const currentPageChanged = (newPageNum) => {
    currentPage.value = newPageNum
}
</script>