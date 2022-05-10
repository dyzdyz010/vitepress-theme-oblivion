<template>
    <Navbar />

    <div class="sm:container sm:mx-auto mt-10">
        <Content v-if="isCustomLayout" />

        <template v-else-if="enableHome">
            <!-- A slot for customizing the entire homepage easily -->
            <slot name="home">
                <Home>
                    <template #hero>
                        <slot name="home-hero" />
                    </template>
                    <template #features>
                        <slot name="home-features" />
                    </template>
                    <template #footer>
                        <slot name="home-footer" />
                    </template>
                </Home>
            </slot>
        </template>


    <Footer />
    </div>
</template>

<script setup lang='ts'>
import Navbar from '../components/Navbar.vue'
import Posts from '../components/Posts.vue'
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'
import { useData } from "vitepress"

const title = useData().page.value.title
const data = useData()
console.log(data);

</script>

<style>
</style>