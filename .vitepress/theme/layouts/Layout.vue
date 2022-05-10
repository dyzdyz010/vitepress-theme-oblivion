<template>
    <Navbar />

    <div class="sm:container sm:mx-auto mt-10">
        <Home v-if="enableHome" />
        <Post v-else-if="isPost" />
    </div>
    <Footer />
</template>

<script setup lang='ts'>
import Navbar from '../components/Navbar.vue'
import Post from '../components/Post.vue'
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'

import { computed } from 'vue'
import { useData } from 'vitepress'

const title = useData().page.value.title
// const data = useData()
const {site, page, theme, frontmatter} = useData()

// custom layout
const isCustomLayout = computed(() => !!frontmatter.value.customLayout)
// home
const enableHome = computed(() => !!frontmatter.value.home)
const isPost = computed(() => useData().page.value.relativePath.indexOf("posts") > -1 ? true : false)
// console.log('path: ' + page.localePath);


</script>

<style>
</style>