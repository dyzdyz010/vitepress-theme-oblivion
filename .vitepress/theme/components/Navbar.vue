<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="navbar border border-x-0 border-t-0 border-b-gray-200" v-slot="{ open }">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-700 hover:text-sky-700 focus:outline-none">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex sm:items-stretch justify-center sm:justify-start">
          <div class="flex-shrink-0 flex mr-10 items-center">
            <a :href="localePath" class="">
              <img v-if="theme.logo" class="justify-center lg:inline h-8 w-auto" :src="withBase(theme.logo)"
                alt="Logo" />
            </a>

            <a :href="localePath"
              class="text-xl font-bold text-gray-700 hover:text-sky-700 rounded-md hidden md:inline ml-2">{{ site.title
              }}</a>
            <!-- <img class="block lg:hidden h-8 w-auto" src="/blog_logo.svg" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="/blog_logo.svg" alt="Workflow" /> -->
          </div>
          <div class="hidden sm:block ml-auto">
            <div class="flex-1 flex space-x-1 justify-end">
              <div v-for="item in navigation" :key="item.text" class="px-3 py-2 inline-flex">
                <a v-if="!item.sub" :href="[item.sub ? '#' : item.link]"
                  :class="[isActive(route, withBase(item.link)) ? 'text-sky-700' : 'text-gray-500 hover:text-sky-700', 'text-base font-bold']"
                  :aria-current="item.current ? 'page' : undefined">
                  <DynamicIcon :iconname="item.icon" :class="'inline-block w-5 h-5 mr-1'" />
                  <span>{{ item.text }}</span>
                </a>
                <Menu v-else as="div" class="ml-3 relative">
                  <div>
                    <MenuButton
                      :class="[item.current ? 'text-sky-700' : 'text-gray-500 hover:text-sky-700', 'focus:outline-none text-base font-bold']">
                      <DynamicIcon :iconname="item.icon" :class="'inline-block w-5 h-5'" />
                      {{ item.text }}
                      <DynamicIcon :iconname="'chevron-down'" :class="'inline-block w-5 h-5'" />
                    </MenuButton>
                  </div>
                  <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems
                      class="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem v-slot="{ active }" v-for="s in item.sub" :key="s" @click="selectCollection(s)" class="cursor-pointer">
                      <a
                        :class="[active ? 'bg-gray-100 text-gray-700' : 'text-gray-500', 'block px-4 py-2 text-sm font-bold']">
                        {{ s }}
                      </a>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in navigation" :key="item.text" as="a" :href="item.link"
          :class="[isActive(route, withBase(item.link)) ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.text }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import DynamicIcon from '../components/DynamicIcon.vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { TagIcon } from '@heroicons/vue/solid'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]
import { computed } from 'vue'
import { useRouter, useRoute, useData, withBase } from "vitepress"
import { isActive } from '../helpers/utils.ts'


const route = useRoute()
const router = useRouter()

const { site, theme, localePath } = useData()

const navigation = theme.value.nav

const postLength = useData().theme.value.postLength
const collections = [{ name: '', count: postLength }].concat(useData().theme.value.collectionss)
const selectCollection = function (collection) {
  router.go('/collections#' + collection)
}

const active = computed((link) => isActive(route, withBase(link)))

// console.log(navigation)
</script>