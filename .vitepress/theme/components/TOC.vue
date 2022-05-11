<template>
    <transition appear enter-active-class="transition ease-out duration-300 delay-100"
        enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
        <div class="toc fixed left-32 top-40 bottom-40">
            <ul class="toc-links flex flex-col">
                <li v-for="item in toc" class="toc-link">
                    <a :href="item.link"
                        class="l1 toc-link-item block pr-4 py-1 border-r-2 border-r-gray-300 text-gray-500 font-normal text-sm hover:text-sky-800">{{
                                item.text
                        }}</a>
                    <ul v-if="item.children" class="toc-links flex flex-col ml-4">
                        <li v-for="c in item.children" class="toc-link">
                            <a :href="c.link"
                                class="l2 toc-link-item block pr-4 py-1 border-r-2 border-r-gray-300 text-gray-500 font-light text-sm hover:text-sky-800">{{
                                        c.text
                                }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { useRoute, useData, withBase } from "vitepress"
import { getTOC } from '../helpers/toc.ts'
import { useActiveSidebarLinks } from '../helpers/activeTOCLink.ts'

useActiveSidebarLinks()

const data = useData()
const toc = getTOC()
let route = useRoute()
let path = route.path
</script>

<style scoped>
.l1.active {
    @apply text-sky-700 border-r-sky-700 font-medium;
}

.l2.active {
    @apply text-sky-700 border-r-sky-700 font-normal;
}
</style>