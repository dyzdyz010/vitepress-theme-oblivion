<template>
    <a v-if="islink" :href="titlelink" class="block text-3xl font-medium mb-5 text-sky-600 hover:text-sky-800">{{ title }}</a>
    <h1 v-else class="block text-4xl font-bold mb-5 text-gray-700">{{ title }}</h1>
    <div class="font-medium text-gray-500">
        <span>
            <DynamicIcon :iconname="'clock'" :class="'inline-block w-4 h-4 mr-2 mb-[0.1rem]'" />
            <span>{{ date }}</span>
        </span>
        <span class="mx-5">|</span>
        <span>
            <DynamicIcon :iconname="'user'" :class="'inline-block w-4 h-4 mr-2 mb-[0.1rem]'" />
            <span>{{ author }}</span>
        </span>
        <span class="mx-5">|</span>
        <span>
            <DynamicIcon :iconname="'tag'" :class="'inline-block w-4 h-4 mr-2 mb-[0.1rem]'" />
            <span v-for="t in tags" class="mr-2">{{ t }}</span>
        </span>
    </div>
</template>

<script setup lang="ts">
import DynamicIcon from "./DynamicIcon.vue"

const props = defineProps({
  title: String,
  date: String,
  author: String,
  tags: Array,
  islink: Boolean,
  titlelink: String,
})

const dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
}
const dateTemp = new Date(props.date)

const date = dateTemp.toLocaleDateString('en-US', dateOptions)
</script>