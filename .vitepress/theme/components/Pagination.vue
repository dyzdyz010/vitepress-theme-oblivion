<template>
<div class="pagination flex">

</div>
</template>

<script setup lang="ts">
import { useData } from "vitepress"

const pageSize = useData().theme.value.pageSize
console.log(pageSize)
const pageNum = 

const props = defineProps({
    currentPage: Number,
})
</script>