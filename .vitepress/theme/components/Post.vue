<template>
    <transition appear enter-active-class="transition ease-in-out duration-300"
        enter-from-class="transform opacity-0 -translate-y-3" enter-to-class="opacity-100">
        <div :class="[hasTOC ? 'md:ml-[68] lg:ml-80 lg:mr-10' : 'md:mx-32', 'md:mt-20 mx-2']">
            <PostTitle :title="title" :date="date" :author="author" :tags="tags" :islink="false" :titlelink="''" />
            <div class="post mt-16">
                <Content />
            </div>
            <transition appear enter-active-class="transition ease-out duration-300 delay-200"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
                <div class="comment mt-40">
                    <Comment />
                </div>
            </transition>
        </div>
    </transition>

    <transition appear enter-active-class="transition ease-out duration-300 delay-100"
        enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
        <TOC v-if="hasTOC" :toc="toc" />
    </transition>

    <DynamicIcon :iconname="'arrow-circle-up'"
        class="hidden sm:block fixed sm:right-8 sm:bottom-8 w-10 h-10 text-gray-600 hover:text-sky-800 cursor-pointer"
        @click="backToTop" />


</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { useData } from "vitepress"

import PostTitle from "./PostTitle.vue"
import DynamicIcon from '../components/DynamicIcon.vue'
import Comment from './Comment.vue'
import TOC from "./TOC.vue"

import { getTOC } from '../helpers/toc'

const toc = getTOC()
const hasTOC = computed(() => toc.length != 0)

const title = useData().page.value.frontmatter.title
const author = useData().page.value.frontmatter.author
const tags = useData().page.value.frontmatter.tags
const date = useData().page.value.frontmatter.date
const backToTop = ref()

onMounted(() => {
    backToTop.value = function () {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 100)
    }
})
</script>
