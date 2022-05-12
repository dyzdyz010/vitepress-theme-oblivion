<template>
    <Hero />
    <div class="flex sm:flex-nowrap flex-wrap flex-row xl:mx-28 lg:mx-7 mx-2">
        <div class="basis-full md:basis-2/3 px-2 md:px-6">
            <transition appear enter-active-class="transition ease-out duration-300 delay-150"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
                <Posts />
            </transition>
        </div>
        <div class="mt-9 md:mt-0 basis-full md:basis-1/3 px-2 md:px-6">
            <Info />
        </div>
    </div>
</template>

<script setup lan="ts">
import Posts from '../components/Posts.vue'
import Hero from '../components/Hero.vue'
import Info from '../components/Info.vue'
</script>