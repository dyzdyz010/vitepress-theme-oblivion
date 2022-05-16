<template>
    <Hero />
    <div class="flex sm:flex-nowrap flex-wrap flex-row xl:mx-28 lg:mx-7 mx-2">
        <div class="basis-full md:basis-3/4 px-2 md:px-6">
            <transition appear enter-active-class="transition ease-out duration-300 delay-150"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
                <Posts :posts="posts" :current-page="currentPage" @currentPageChanged="currentPageChanged" />
            </transition>
        </div>

        <transition appear enter-active-class="transition ease-out duration-300 delay-200"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
            <div
                class="mt-9 md:mt-0 basis-full md:basis-1/4 px-2 md:px-6 border border-y-0 border-x-gray-200 border-dashed hover:border-x-gray-400">
                <Info />
            </div>
        </transition>
    </div>
</template>

<script setup lan="ts">
import Posts from '../components/Posts.vue'
import Hero from '../components/Hero.vue'
import Info from '../components/Info.vue'
import { useData } from 'vitepress'
import { ref } from 'vue'

import { getStoragePage } from "../helpers/pagination.ts"

const posts = useData().theme.value.posts
var currentPage = ref(getStoragePage())

const currentPageChanged = (newPageNum) => {
    currentPage.value = newPageNum
}
</script>