<template>
{{daysInYear}}
<svg viewbox="0 0 100 200">
    <g class="translate-x-0 translate-y-9">
        <text class="text-gray-600" :x="1 * SquareSize" :y="SquareSize - SquareBorderSize">{{days[1]}}</text>
        <text class="text-gray-600" :x="3 * SquareSize" :y="SquareSize - SquareBorderSize">{{days[3]}}</text>
        <text class="text-gray-600" :x="5 * SquareSize" :y="SquareSize - SquareBorderSize">{{days[5]}}</text>
    </g>
</svg>
</template>

<script setup lang="ts">
import { daysOfYear, SquareSize, SquareBorderSize } from './utils.ts'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let today = new Date()
let year = today.getFullYear()
// console.log(year);
const daysInYear = daysOfYear(2022)
</script>