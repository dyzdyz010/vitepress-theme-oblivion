<template>
    <div class="collection-list">
        <span v-for="t in collections"
            :class="[currentCollection == t.name ? 'font-medium text-sky-700' : 'text-gray-500', 'mr-8 cursor-pointer hover:text-sky-700 font-medium inline-block whitespace-nowrap']"
            @click="selectCollection(t.name)">
            {{ t.name == '' ? 'All' : t.name }}
            <sup class="ml-0.5">{{ t.count }}</sup>
        </span>
    </div>
</template>

<script setup lang="ts">
import { useData, useRouter } from "vitepress"

const router = useRouter()

const props = defineProps({
    currentCollection: String
})

const emit = defineEmits(['currentCollectionChanged'])

const postLength = useData().theme.value.postLength
const collections = [{ name: '', count: postLength }].concat(useData().theme.value.collections)
const selectCollection = function (collection) {

    emit('currentCollectionChanged', collection)
    router.go('/collections#' + collection)
}

</script>