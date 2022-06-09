<template>
    <div id="vcomment"></div>
</template>

<script setup lang="ts">

import { onMounted } from "vue"

onMounted(async () => {
    const Valine = await(await import('valine')).default
    new Valine({
        el: '#vcomment',
        appId: 'RJNIQXLCKl82bptaBsSXfGBJ-gzGzoHsz',
        appKey: 'rhgabwxFDJJYj0gXAzO4HMO0',
        placeholder: 'Say something if you\'d like to.',
        avatar: 'monsterid',
        visitor: true,
    })
})
</script>

<style lang="scss">
#vcomment {
    @apply text-xl;

    .vwrap {
        @apply border rounded-none border-l-0 border-r-0 border-y-gray-400;

        .vsubmit {
            @apply text-base border-0 text-sky-700 hover:text-sky-500;
        }
    }

    .vheader .vinput {
        @apply hover:border-b-sky-700 focus:border-b-sky-500;
    }

    .vedit {
        .vicon {
            @apply fill-gray-700 hover:fill-sky-700;
        }
    }

    .vcount {
        @apply text-lg text-gray-700;
    }

    .vcards .vh {
        .vcontent p {
            @apply text-gray-600;
        }

        .vhead {
            .vnick {
                @apply text-teal-700 hover:text-teal-500;
            }
        }

        .vat {
            @apply text-rose-700 hover:text-rose-500;
        }
    }

    .vpower {
        a {
            @apply text-base;
        }
    }

    .vempty {
        @apply text-base;
    }
}
</style>