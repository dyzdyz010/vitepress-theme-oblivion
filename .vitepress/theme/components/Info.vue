<template>
    <div class="personal justify-center">
        <img v-if="theme.logo" class="block h-24 w-24 mx-auto my-4" :src="withBase(theme.logo)"
                alt="Logo" />
        <h3 class="block text-xl text-center text-gray-700">{{author}}</h3>
        <div class="flex flex-row text-center text-gray-700 my-5">
            <div class="basis-1/2 border border-y-0 border-l-0 border-r-gray-300">
                <span class="block text-2xl">10</span>
                <span class="block text-base">Posts</span>
            </div>
            <div class="basis-1/2">
                <span class="block text-2xl">7</span>
                <span class="block text-base">Tags</span>
            </div>
        </div>
        <Socials :socials="socials" />
    </div>
</template>

<script setup lang="ts">
import CalendarHeatmap from './calendar-heatmap/CalendarHeatmap.vue'
import Socials from './Socials.vue'

import { useData, withBase } from 'vitepress'

const { site, theme, localePath } = useData()
const author = theme.value.author

const socials = theme.value.socials
</script>