<template>
    <nav class="w-full py-8 px-12 text-white font-bold flex justify-between">
        <div class="flex  items-center gap-8">
            <NuxtLink to="/">
                <GlobalLogo class="fill-red-500" />
            </NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/movies">Movies</NuxtLink>
            <NuxtLink to="/tv">Series</NuxtLink>
        </div>
        <div class="flex-1 flex justify-center">
            <Transition 
            enter-from-class = "-translate-y-10 opacity-0"
            enter-active-class="transtion-all duration-300"
            leave-to-class="-translate-y-10 opacity-0"
            leave-active-class="transtion-all duration-300"

            >
            <div v-if="searchOpen" class="pr-2 bg-primary/40  flex w-1/2  items-center gap-4 rounded-full ">
                <GlobalSearchForm class="w-full"  />
            </div>
            </Transition>
        </div>
        <div class="flex gap-6 items-center">
            <button class="search-toggle" type="button" aria-label="Search" aria-haspopup="true" :aria-expanded="`${searchOpen}`"
                @click="toggleSearch" >
                <IconsSearch class="w-6 cursor-pointer fill-white" />
            </button>
            <button>
                <IconsBell class="w-6 fill-white" />
            </button>
            <NuxtLink to="/Auth/login" class="px-6 py-2 bg-primary text-sm font-semibold rounded-full">LOGIN</NuxtLink>
        </div>
    </nav>
</template>

<script setup>
import { useSearchStore } from '~/stores/search'

const route=useRoute()
const searchStore = useSearchStore()
const { searchOpen } = storeToRefs(searchStore)

const toggleSearch = ()=>{
    if (route.name !== 'search') {
        searchStore.toggleSearch()
      }
}

</script>
