<template>
    <Hero />
    <div class="flex flex-row">
        <div class="basis-3/4 px-5">
            <Posts />
        </div>
        <div class="basis-1/4 px-5">
            <p>{{ data }}</p>
        </div>
    </div>
</template>

<script setup lan="ts">

import Posts from '../components/Posts.vue'
import Hero from '../components/Hero.vue'

import { useData } from "vitepress"

const data = useData()
</script>