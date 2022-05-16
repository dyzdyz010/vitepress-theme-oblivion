<template>
<div class="pagination flex justify-center items-center mt-7">
    <DynamicIcon v-if="currentPage > 1" :iconname="'chevron-double-left'" @click="prevPage" class="w-4 h-4 text-gray-600 hover:text-sky-700 cursor-pointer" />

    <div class="jump-links mx-4">
        <span v-if="isAll" v-for="i in pageNum" :class="[i == currentPage ? 'text-sky-700' : 'text-gray-600', 'mx-2 text-lg hover:text-sky-700 cursor-pointer']" @click="jumpToPage(i)">{{i}}</span>
    </div>

    <DynamicIcon v-if="currentPage < pageNum" :iconname="'chevron-double-right'" @click="nextPage" class="w-4 h-4 text-gray-600 hover:text-sky-800 cursor-pointer" />
</div>
</template>

<script setup lang="ts">
import DynamicIcon from "./DynamicIcon.vue"
import { computed } from "vue"
import { useData } from "vitepress"

const props = defineProps({
    currentPage: Number,
    posts: Array,
})

const emit = defineEmits(['currentPageChanged'])

const prevPage = function () {
    const newCurrentPage = props.currentPage == 1 ? 1 : props.currentPage - 1
    emit('currentPageChanged', newCurrentPage)
}

const nextPage = function () {
    const newCurrentPage = props.currentPage == pageNum ? pageNum : props.currentPage + 1
    emit('currentPageChanged', newCurrentPage)
}

const jumpToPage = function (page) {
    emit('currentPageChanged', page)
}

const pageSize = useData().theme.value.pageSize

const pageNum = computed(() => Math.ceil(props.posts.length / pageSize))
const isAll = computed(() => pageNum.value < 6)
</script>