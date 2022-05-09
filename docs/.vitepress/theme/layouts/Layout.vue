<template>
    <Navbar />
    <Hero />
    <div class="sm:container sm:mx-auto mt-10">
        <div class="flex flex-row">
            <div class="basis-3/4 px-5">

            <h1 class="text-3xl font-bold underline">{{ title }}</h1>
            <p>{{ data }}</p>
            </div>
            <div class="basis-1/4 px-5">
            <Posts />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Navbar from '../components/Navbar.vue'
import Posts from '../components/Posts.vue'
import Hero from '../components/Hero.vue'
import { useData } from "vitepress"

const title = useData().page.value.title
const data = useData()
console.log(data);

</script>

<style>
</style>