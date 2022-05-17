<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- <transition appear enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"> -->
  <div class="my-40 text-center">
    <transition appear enter-active-class="transition ease-out duration-300"
      enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
      <h1 class="text-5xl font-bold mb-5 text-gray-700">{{ title }}</h1>
    </transition>
    <transition appear enter-active-class="transition ease-out duration-300 delay-100"
      enter-from-class="transform opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
      <h2 class="text-2xl font-normal text-gray-600">{{ desc }}</h2>
    </transition>
  </div>
  <!-- </transition> -->
</template>

<script setup>

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

import { useData } from "vitepress"

const data = useData()
const title = data.site.value.title
const desc = data.site.value.description
</script>