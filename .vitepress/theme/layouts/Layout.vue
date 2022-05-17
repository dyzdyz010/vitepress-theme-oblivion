<template>
    <div class="flex flex-col h-screen">
        <Navbar />
        <div class="flex flex-col lg:container lg:mx-auto mt-10 mb-20">
            <Home v-if="enableHome" />
            <Post v-else-if="isPost" />
            <Content v-else />
        </div>
        <Footer />
    </div>
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
const { site, page, theme, frontmatter } = useData()

// custom layout
const isCustomLayout = computed(() => !!frontmatter.value.customLayout)
// home
const enableHome = computed(() => !!frontmatter.value.home)
const isPost = computed(() => (useData().page.value.relativePath.indexOf("posts") > -1 ? true : false) || frontmatter.value.isPost)
</script>