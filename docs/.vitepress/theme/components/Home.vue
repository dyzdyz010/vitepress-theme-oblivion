<template>
    <div class="flex flex-row">
        <div class="basis-3/4 px-5">
            <h1 class="text-3xl font-bold underline">{{ title }}</h1>
            <p>{{ data }}</p>
        </div>
        <div class="basis-1/4 px-5">
            <Posts />
        </div>
    </div>
</template>

<script setup lan="ts">
import { useData } from "vitepress"

const data = useData()
</script>