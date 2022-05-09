<template>
<component class="inline h-5 w-5" :is="TheIcon"></component>
</template>

<script setup lang="ts">
import * as HIcons from '@heroicons/vue/solid'

const props = defineProps({
  iconname: String
})
const {...icons} = HIcons
const ifullname = props.iconname.charAt(0).toUpperCase() + props.iconname.slice(1) + 'Icon'
const TheIcon = icons[ifullname]
</script>