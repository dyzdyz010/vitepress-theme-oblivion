<template>
<div class="pagination flex justify-center h-5 mt-7">
    <DynamicIcon :iconname="'chevron-double-left'" @click="prevPage" class="text-gray-600 hover:text-sky-800 cursor-pointer" />
    <DynamicIcon :iconname="'chevron-double-right'" @click="nextPage" class="text-gray-600 hover:text-sky-800 cursor-pointer" />
</div>
</template>

<script setup lang="ts">
import DynamicIcon from "./DynamicIcon.vue"
import { useData } from "vitepress"

const props = defineProps({
    currentPage: Number,
})

const prevPage = function () {
    props.currentPage = props.currentPage == 1 ? 1 : props.currentPage - 1
    
    console.log('prevPage clicked: ' + props.currentPage)
}

const nextPage = function () {
    props.currentPage = props.currentPage == pageNum ? pageNum : props.currentPage + 1

    console.log('nextPage clicked: ' + props.currentPage)
}

const posts = useData().theme.value.posts
const pageSize = useData().theme.value.pageSize
const pageNum = Math.ceil(posts.length / pageSize)
</script>