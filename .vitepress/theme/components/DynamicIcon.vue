<template>
  <!-- <component :is="TheIcon"></component> -->
  <FontAwesomeIcon :icon="ifullname" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import * as HIcons from '@heroicons/vue/solid'

import { library } from '@fortawesome/fontawesome-svg-core'

import * as FAIcons from '@fortawesome/free-solid-svg-icons'
import * as FABIcons from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */

// console.log(FAIcons)
/* add icons to the library */
// library.add(faUserSecret)

const props = defineProps({
  iconname: {
    type: String,
    default: 'tag',
  },
  isBrand: {
    type: Boolean,
    default: false,
  },
})

const Icons = computed(() => props.isBrand ? FABIcons : FAIcons)
var tempname = props.iconname.replace(/-./g, x => x[1].toUpperCase()) || props.iconname
tempname = 'fa' + tempname.charAt(0).toUpperCase() + tempname.slice(1)
const iname = tempname
console.log(iname)
const icon = (Icons.value)[iname]
// console.log('iname')
library.add(icon)
library.add((Icons.value)['faTag'])
// console.log(iname)


const ifullname = computed(() => {
  if (icon) {
    var nameArr = [(props.isBrand ? 'fab' : 'fas')]
    nameArr.push(props.iconname)
    console.log(nameArr)
    return nameArr
  }
  return ['fas', 'tag']
})

</script>