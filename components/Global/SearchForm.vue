<template>
    <div>
        <form class="search-form w-full flex font-semibold text-xs gap-4 px-4" autocomplete="off" @submit.prevent>
            <label class="sr-only" for="search">Search</label>
            <IconsSearch class="w-5 fill-primary"/>
            <input class="bg-transparent w-full flex-1 text-white focus:outline-0" id="search"
                ref="input" v-model.trim="query" name="search" type="text"
                placeholder="Search for a game..." @keyup="goToRoute" @blur="unFocus">

            <button class="group " v-if="showButton" type="button" aria-label="Close" @click="goBack">
                <!-- eslint-disable-next-line -->
                <IconsClose class="w-5 group-hover:rotate-90 transition-all duration-300" />
            </button>
        </form>
    </div>
</template>

<script setup>
import { useSearchStore } from '~/stores/search'

const input = ref()

const searchStore = useSearchStore()
const { query, fromPage } = storeToRefs(searchStore)
const route = useRoute()
const router = useRouter()

onMounted(() => {
    input.value.focus()
});

const showButton = computed(() => { return route.name === 'search' })

const goToRoute = () => {
    if (query.value) {
        router.push({ path: '/search', query: { q: query.value } })
    } else {
        router.push({
            path: fromPage.value
        });
    }
}

const goBack = () => {
    query.value = ""
    searchStore.closeSearch()
    router.push({
        path: fromPage.value
    })
}

const unFocus = (e) => {
    if (route.name !== 'search') {
        const target = e.relatedTarget;
        if (!target || !target.classList.contains('search-toggle')) {
            query.value = ''
            searchStore.closeSearch()
        }
    }
}
</script>