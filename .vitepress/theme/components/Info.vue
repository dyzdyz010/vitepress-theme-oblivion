<template>
    <CalendarHeatmap />
</template>

<script setup lang="ts">
import CalendarHeatmap from './calendar-heatmap/CalendarHeatmap.vue'

import { useData } from 'vitepress'

const data = useData()
</script>