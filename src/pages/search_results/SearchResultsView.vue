<template>
    <section class="search-results view">
        <h1 class="display-lg">Результаты поиска</h1>
        <div class="search-grid">
            <SearchResultComponent v-for="searchResult in data.movies" :key="searchResult.id" :content="searchResult"
                @click="router.push({ name: 'movie', params: { id: searchResult.id } })" />
        </div>
        <SearchPaginator :page_first=page_first :page_last=page_last :modelValue=currentPage
            @update:modelValue="changePage" />
    </section>
</template>

<script setup lang="ts">
import SearchResult from '@/models/SearchResult';
import SearchResultComponent from '@/pages/search_results/components/SearchResult.vue';
import SearchPaginator from './components/SearchPaginator.vue';
import { getMovies, convertMovies } from './api/get_movies';
import { onMounted, reactive, ref } from 'vue';
import router from '@/router';
let data = reactive(
    {
        movies: [] as SearchResult[]
    }
);
let pageSize = 1;
let currentPage = ref(1);
let page_first = ref(1);
let page_last = ref(1);
onMounted(async () => {
    await getResults(1);
})

async function getResults(page: number) {
    currentPage.value = page;
    let res = (await getMovies(router.currentRoute.value.query.query?.toString() ?? "", pageSize, currentPage.value - 1));
    try {
        data.movies = convertMovies(res.data);
        page_last.value = ~~((res.totalCount ?? 0) / pageSize) + ((res.totalCount ?? 0) % pageSize == 0 ? 0 : 1);
    }
    catch {
        console.log(res.error);
    }
}

async function changePage(page: number) {
    await getResults(page);

}

</script>
<style scoped>
.search-results {
    margin: 3rem auto;
}

.search-results h1 {
    margin-bottom: 2rem;
}

.search-grid {
    width: 75vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 16px;
}
</style>