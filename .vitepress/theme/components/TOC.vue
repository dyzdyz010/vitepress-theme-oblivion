<template>
    <div class="hidden lg:block toc fixed left-8 lg:ml-12 top-40 bottom-40">
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
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useData, withBase } from "vitepress"
import { getTOC } from '../helpers/toc.ts'
import { useActiveSidebarLinks } from '../helpers/activeTOCLink.ts'

const props = defineProps({
    toc: Array,
})

onMounted(() => {
    useActiveSidebarLinks()
})
</script>

<style scoped>
.l1.active {
    @apply text-sky-700 border-r-sky-700 font-medium;
}

.l2.active {
    @apply text-sky-700 border-r-sky-700 font-normal;
}
</style>