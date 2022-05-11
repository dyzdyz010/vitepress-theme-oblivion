<template>
    {{ data }}
</template>

<!-- <script lang="ts">
// import { useInstance } from '..//helpers/composable.ts'
import { getCurrentInstance } from 'vue'

export default {
    setup() {
        const instance = getCurrentInstance()
        return {instance}        
    },
}
</script> -->

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
console.log(route.data.headers)

// const instance = getCurrentInstance()
// console.log(instance.parent)
const data = "aaa"
</script>