<template>
    <section class="search-results view">
        <SearchBar @update-query="updateQuery" />
        <h1 class="display-lg">Результаты поиска</h1>
        <div class="action-bar">
            <button @click="changeSearchType(0)" class="btn btn-primary" :disabled="activeIndex == 0">Фильмы</button>
            <button @click="changeSearchType(1)" class="btn btn-primary" :disabled="activeIndex == 1">Сериалы</button>
        </div>
        <div class="search-content">
            <div class="filters">
                <h3 class="display-sm">Фильтры</h3>
                <FilterPicker @update-list="updateGenreFilters" :displayText="'Жанры'" />
                <FilterPicker @update-list="updateActorFilters" :displayText="'Актеры'" />
                <input class="txt-body-lg" type="text" name="director" id="director" placeholder="Режиссер"
                    v-model="directorFilter">
                <button class="btn btn-primary" @click="getResults(currentPage)">Применить</button>
            </div>
            <div class="search-movies" v-if="activeIndex == 0">
                <div class="search-grid">
                    <SearchResultComponent v-for="searchResult in data.results" :key="searchResult.id"
                        :content="searchResult"
                        @click="router.push({ name: 'movie', params: { id: searchResult.id } })" />
                </div>
            </div>
            <div class="search-series" v-if="activeIndex == 1">
                <div class="search-grid">
                    <SearchResultComponent v-for="searchResult in data.results" :key="searchResult.id"
                        :content="searchResult"
                        @click="router.push({ name: 'series', params: { id: searchResult.id } })" />
                </div>

            </div>
        </div>
        <SearchPaginator :page_first=page_first :page_last=page_last :modelValue=currentPage
            @update:modelValue="changePage" />
    </section>
</template>

<script setup lang="ts">
import SearchResultComponent from '@/pages/search_results/components/SearchResult.vue';
import SearchPaginator from '../../components/SearchPaginator.vue';
import { getMovies, convertMovies } from '../../api/get/get_movies';
import { getSeries, convertSeries } from '../../api/get/get_series';
import { onMounted, reactive, ref } from 'vue';
import router from '@/router';
import FilterPicker from './components/FilterPicker.vue';
import SearchBar from '@/components/SearchBar.vue';
import type MediaContent from '@/models/MediaContent';
let data = reactive(
    {
        results: [] as MediaContent[],
    }
);
let query = router.currentRoute.value.query.query?.toString() ?? "";
let genreFilters = ref([] as string[]);
let actorFilters = ref([] as string[]);
let directorFilter = ref("");
let activeIndex = ref(0);
let pageSize = 9;
let currentPage = ref(1);
let page_first = ref(1);
let page_last = ref(1);
onMounted(async () => {
    await getResults(1);
})

async function getResults(page: number) {
    let filters = {
        genres: genreFilters.value,
        actors: actorFilters.value,
        director: directorFilter.value
    }
    currentPage.value = page;
    if (activeIndex.value == 0) {
        getMoviesFromQuery(filters);
    }
    else {
        getSeriesFromQuery(filters);
    }

}

async function getMoviesFromQuery(filters: any) {
    let res = (await getMovies(query, pageSize, currentPage.value - 1, filters));
    try {
        data.results = convertMovies(res.data);
        page_last.value = ~~((res.totalCount ?? 0) / pageSize) + ((res.totalCount ?? 0) % pageSize == 0 ? 0 : 1);
    }
    catch {
        console.log(res.error);
    }
}

async function getSeriesFromQuery(filters: any) {
    let res = (await getSeries(query, pageSize, currentPage.value - 1, filters));
    try {
        data.results = convertSeries(res.data);
        page_last.value = ~~((res.totalCount ?? 0) / pageSize) + ((res.totalCount ?? 0) % pageSize == 0 ? 0 : 1);
    }
    catch {
        console.log(res.error);
    }
}

function changeSearchType(index: number) {
    activeIndex.value = index;
    getResults(1);
}

async function changePage(page: number) {
    await getResults(page);

}
function updateQuery(newQuery: string) {
    query = newQuery;
    getResults(1);
}
function updateGenreFilters(filters: string[]) {
    genreFilters.value = filters;
}

function updateActorFilters(filters: string[]) {
    actorFilters.value = filters;
}

</script>
<style scoped>
.action-bar {
    display: flex;
    gap: 1rem;
}

.search-results {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.search-content {
    display: flex;
    gap: 1rem;
}

.search-grid {
    width: 50vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
}

.filters {
    border: 1px solid var(--outline);
    border-radius: 1rem;
    padding: 1rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>