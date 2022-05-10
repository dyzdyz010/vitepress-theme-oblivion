<template>
<component :is="TheIcon"></component>
</template>

<script setup lang="ts">
import * as HIcons from '@heroicons/vue/solid'

const props = defineProps({
  iconname: String
})
const {...icons} = HIcons
let tempname = props.iconname.replace(/-./g, x=>x[1].toUpperCase()) || props.iconname
const ifullname = tempname.charAt(0).toUpperCase() + tempname.slice(1) + 'Icon'
const TheIcon = icons[ifullname]
</script>