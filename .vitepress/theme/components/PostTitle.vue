<template>
    <div class="post-title">
        <a v-if="islink" :href="titlelink" class="block text-3xl font-medium mb-5 text-gray-600 hover:text-sky-800">{{
                title
        }}</a>
        <h1 v-else class="block text-4xl font-bold mb-5 text-gray-700">{{ title }}</h1>
        <div class="flex flex-row flex-wrap font-medium text-gray-500">
            <span class="mr-4 lg:mr-0">
                <DynamicIcon :iconname="'clock'" :class="'inline-block w-4 h-4 mr-2 mb-[0.1rem]'" />
                <span>{{ date }}</span>
            </span>
            <span class="hidden lg:inline-block md:mx-5">|</span>
            <span class="mr-4 lg:mr-0">
                <DynamicIcon :iconname="'user'" :class="'inline-block w-4 h-4 mr-2 mb-[0.1rem]'" />
                <span>{{ author }}</span>
            </span>
            <span class="hidden lg:inline-block md:mx-5">|</span>
            <span class="break-words">
                <DynamicIcon :iconname="'tag'" :class="'inline-block w-4 h-4 mr-2 mb-[0.1rem]'" />
                <span v-for="t in tags" class="mr-2 hover:text-sky-700 cursor-pointer" @click="selectTag(t)">{{ t }}</span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import DynamicIcon from "./DynamicIcon.vue"
import {useRouter} from 'vitepress'
import { setStorageTag } from "../helpers/tags.ts"

const router = useRouter()

const props = defineProps({
    title: String,
    date: String,
    author: String,
    tags: Array,
    islink: Boolean,
    titlelink: String,
})

const dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
}
const dateTemp = new Date(props.date)

const date = dateTemp.toLocaleDateString('en-US', dateOptions)

const selectTag = function (tag) {
    setStorageTag(tag)
    router.go('/tags#' + tag)
}
</script>