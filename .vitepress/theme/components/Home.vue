<template>
    <Hero />
    <div class="flex flex-row mx-28">
        <div class="basis-2/3 px-6">
    <transition appear enter-active-class="transition ease-out duration-300 delay-150"
        enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
                <Posts />
            </transition>
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