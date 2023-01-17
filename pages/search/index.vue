<template>
    <main class="main">
        <h1>Search results</h1>
    </main>
</template>

<script setup>
import { useSearchStore } from '~/stores/search'

const searchStore = useSearchStore()
const { fromPage } = storeToRefs(searchStore)
onMounted(() => {
    searchStore.openSearch()
    searchStore.setFromPage(fromPage)
});

onBeforeRouteLeave((to, from) => {
    const search = document.getElementById('search');
    if (search && search.value.length) {
        searchStore.closeSearch()
    }

}) 
</script>