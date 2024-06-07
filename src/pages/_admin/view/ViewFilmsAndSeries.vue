<template>
    <ViewModels :title="'Модели'">
        <template #model-search>
            <input type="text" name="q" id="q" placeholder="Поиск по модели" v-model="query">
            <button @click="search" class="btn btn-primary">Поиск</button>
        </template>
        <template #model-switch>
            <button v-for="model in models" :key="model.id" @click="activeIndex = model.id"
                :disabled="activeIndex == model.id" class="btn btn-primary">{{ model.name }}</button>
        </template>
        <template #model-grid>
            <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id">
                <template #card-title>{{ model.name }}</template>
                <template #card-content></template>
            </ModelCard>
        </template>
        <template #model-pagination>
            <SearchPaginator :modelValue="currentPage" :page_first="page_first" :page_last="page_last" />
        </template>
    </ViewModels>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ViewModels from '../templates/ViewModels.vue';
import { getSeries } from '@/api/get_series';
import { getMovies } from '@/api/get_movies';
import SearchPaginator from '@/components/SearchPaginator.vue';
import { getActors } from './api/getActors';
import { getDirectors } from './api/getDirectors';
import ModelCard from '../templates/ModelCard.vue';

let models = [
    {
        id: 0,
        name: 'Сериалы'
    },
    {
        id: 1,
        name: 'Фильмы'
    },
    {
        id: 2,
        name: 'Актеры'
    },
    {
        id: 3,
        name: 'Режиссеры'
    }
]
let activeIndex = ref(0);
let query = ref('');
let modelObjects = ref();
let pageSize = 9;
let currentPage = ref(1);
let page_first = ref(1);
let page_last = ref(1);

onMounted(async () => {
    await search();
})

async function search() {
    let res: any;
    try {
        switch (activeIndex.value) {
            case 0:
                res = await getSeries(query.value, pageSize, currentPage.value - 1);
                break;
            case 1:
                res = await getMovies(query.value, pageSize, currentPage.value - 1);
                break;
            case 2:
                res = await getActors(query.value, pageSize, currentPage.value - 1);
                break;
            case 3:
                res = await getDirectors(query.value, pageSize, currentPage.value - 1);
                break;
            default:
                break;
        }
    }
    catch {
        console.log(res.error);
    }
}
</script>

<style scoped></style>