<template>
    <div class="tag-list">
        <span v-for="t in tags"
            :class="[(currentTag == t.name ? 'font-medium text-sky-700' : 'text-gray-500'), 'mr-8 cursor-pointer hover:text-sky-700 font-medium inline-block whitespace-nowrap']"
            @click="selectTag(t.name)">
            {{ t.name == '' ? 'All' : t.name }}
            <sup class="ml-0.5">{{ t.count }}</sup>
        </span>
    </div>
</template>

<script setup lang="ts">
import { useData, useRouter } from "vitepress"

const router = useRouter()

const props = defineProps({
    currentTag: String
})

const emit = defineEmits(['currentTagChanged'])

const postLength = useData().theme.value.postLength
const tags = [{ name: '', count: postLength }].concat(useData().theme.value.tags)
const selectTag = function (tag) {
    
    console.log(tag);
    
    emit('currentTagChanged', tag)
    router.go('/tags#' + tag)
}

</script>