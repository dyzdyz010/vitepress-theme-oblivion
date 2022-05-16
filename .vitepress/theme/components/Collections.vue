<template>
    <div class="xl:mx-64 lg:mx-32 mx-2">
        <transition appear enter-active-class="transition ease-out duration-300"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
            <h1 class="text-center text-gray-700 text-4xl font-bold my-10">Collections</h1>
        </transition>
        <transition appear enter-active-class="transition ease-out duration-300 delay-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
            <CollectionList class="mt-10 mb-20" @currentCollectionChanged="currentCollectionChanged" :current-collection="currentCollection" />
        </transition>
        <transition appear enter-active-class="transition ease-out duration-300 delay-150"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
            <Posts :posts="postsByCollection" :current-page="currentPage" @currentPageChanged="currentPageChanged" />
        </transition>
    </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress"
import { ref, computed, watchEffect } from "vue"
import Posts from './Posts.vue'
import CollectionList from './CollectionList.vue'
import { getStorageCollection, setStorageCollection, getPostsByCollection } from "../helpers/collections.ts"
import { getStoragePage } from "../helpers/pagination.ts"

const currentPage = ref(getStoragePage())
const allPosts = useData().theme.value.posts
const currentCollection = ref(getStorageCollection())
const postsByCollection = computed(() => getPostsByCollection(currentCollection.value))

watchEffect(() => {
    if (window.location.hash) {
        currentCollection.value = decodeURI(window.location.hash.replace('#', ''))
    }
})

const currentCollectionChanged = (newCollection) => {
    currentCollection.value = newCollection
    setStorageCollection(newCollection)
    currentPage.value = 1
}

const currentPageChanged = (newPageNum) => {
    currentPage.value = newPageNum
}
</script>