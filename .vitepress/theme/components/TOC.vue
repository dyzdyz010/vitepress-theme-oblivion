<template>
    <transition appear enter-active-class="transition ease-out duration-300 delay-100"
        enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
        <ul class="flex flex-col fixed left-32 top-40 bottom-40">
            <li v-for="item in toc">
                <a :href="withBase(path + item.link)" class="block pr-4 py-1 border border-y-0 border-l-0 border-r-gray-300 active:border-l-sky-800 text-gray-500 font-normal text-sm hover:text-sky-800">{{ item.text }}</a>
                <ul v-if="item.children" class="flex flex-col ml-4">
                    <li v-for="c in item.children">
                        <a :href="withBase(path + c.link)" class="block pr-4 py-1 active:text-sky-800 border border-y-0 border-l-0 border-r-gray-300 text-gray-500 font-light text-sm hover:text-sky-800">{{ c.text }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </transition>
</template>

<script setup lang="ts">
import { useRoute, useData, withBase } from "vitepress"
import { getTOC } from '../helpers/toc.ts'

const data = useData()
const toc = getTOC()
let route = useRoute()
let path = route.path
console.log(route.path);
</script>