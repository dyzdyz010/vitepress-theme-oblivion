<template>
<div class="socials flex flex-row justify-center">
    <!-- <DynamicIcon :iconname="'github'" :is-brand="true" /> -->
</div>
</template>

<script setup lang="ts">
import DynamicIcon from './DynamicIcon.vue'

const props = defineProps({
    socials: Array,
})
</script>