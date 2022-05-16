<template>
    <!-- <CalendarHeatmap /> -->
    <div class="personal justify-center">
        <img v-if="theme.logo" class="block h-24 w-24 mx-auto my-4" :src="withBase(theme.logo)" alt="Logo" />
        <h3 class="block text-xl text-center text-gray-700">{{ author }}</h3>

        <div class="flex flex-row text-center text-gray-700 my-5">
            <div class="basis-1/2 border border-y-0 border-l-0 border-r-gray-300">
                <span class="block text-2xl">{{ postLength }}</span>
                <span class="block text-base">Posts</span>
            </div>
            <div class="basis-1/2">
                <span class="block text-2xl">{{ tagLength }}</span>
                <span class="block text-base">Tags</span>
            </div>
        </div>

        <div
            class="socials flex flex-row justify-center text-gray-700 py-4 border border-x-0 border-t-0 border-b-gray-200">
            <a v-for="s in socials" :href="s.link" target="_blank"
                class="flex items-center text-base font-medium hover:text-sky-800 hover:underline mx-2">
                <DynamicIcon :iconname="'external-link'" class="inline w-4 h-4" />
                <span>{{ s.name }}</span>
            </a>
        </div>
    </div>

    <div class="collections text-gray-700 py-4 border border-x-0 border-t-0 border-b-gray-200">
        <div>
            <DynamicIcon :iconname="'collection'" class="inline w-5 h-5 mr-1" />
            <span class="text-lg font-medium">Collections</span>
        </div>
        <div class="flex justify-between my-2" v-for="c in collections">
            <span class="hover:text-sky-800 cursor-pointer" @click="selectCollection(c.name)">{{ c.name }}</span>
            <span class="">{{ c.count }}</span>
        </div>
    </div>

    <div class="tags text-gray-700 py-4 border border-x-0 border-t-0 border-b-gray-200">
        <div class="mb-2">
            <DynamicIcon :iconname="'tag'" class="inline w-5 h-5 mr-1" />
            <span class="text-lg font-medium">Tags</span>
        </div>
        <div class="flex justify-start flex-wrap">
            <span v-for="t in tags" class="px-2 hover:text-sky-800 cursor-pointer" @click="selectTag(t.name)">
                {{ t.name }}
                <sup>{{ t.count }}</sup>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import CalendarHeatmap from './calendar-heatmap/CalendarHeatmap.vue'
import DynamicIcon from '../components/DynamicIcon.vue'
import TagList from './TagList.vue'

import { useData, withBase, useRouter } from 'vitepress'

const { site, theme, localePath } = useData()
const router = useRouter()
const author = theme.value.author
const postLength = theme.value.postLength
const tagLength = theme.value.tags.length
const socials = theme.value.socials
const collections = theme.value.collections
const tags = theme.value.tags

const selectCollection = function (collection) {
    router.go('/collections#' + collection)
}

const selectTag = function (tag) {
    router.go('/tags#' + tag)
}
</script>