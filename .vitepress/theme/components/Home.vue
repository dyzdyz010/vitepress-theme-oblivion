<template>
    <Hero />
    <div class="flex flex-row mx-28">
        <div class="basis-2/3 px-6">
            <Posts />
        </div>
        <div class="basis-1/3 px-6">
            <Info />
        </div>
    </div>
</template>

<script setup lan="ts">
import Posts from '../components/Posts.vue'
import Hero from '../components/Hero.vue'
import Info from '../components/Info.vue'
</script>