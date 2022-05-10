<template>
    <transition v-for="(item, index) in posts" appear
        enter-active-class="transition ease-out duration-300 delay-150"
        enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
        <div :class="[index == 0 ? '' : 'border border-x-0 border-b-0 border-t-gray-200 pt-4', 'mb-5']">
            <PostTitle :title="item.frontMatter.title" :date="item.frontMatter.date" :author="item.frontMatter.author"
                :tags="item.frontMatter.tags" :islink="true" :titlelink="withBase(item.regularPath)" />
        </div>
    </transition>
</template>

<script setup lang="ts">
import PostTitle from "./PostTitle.vue"
import { useData, withBase } from "vitepress"

const posts = useData().theme.value.posts
</script>