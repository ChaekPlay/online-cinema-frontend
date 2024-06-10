<template>
    <ViewModels :title="'Модели'">
        <template #model-search>
            <div class="input-field" v-if="activeIndex == 0 || activeIndex == 1">
                <input class="txt-body-lg" type="text" name="q" id="q" placeholder="Поиск по модели" v-model="query">
                <button @click="search" class="btn btn-primary txt-body-lg">Поиск</button>
            </div>
        </template>
        <template #model-switch>
            <button v-for="model in models" :key="model.id" @click="switchIndex(model.id)"
                :disabled="activeIndex == model.id" class="btn btn-primary">{{ model.name }}</button>
        </template>
        <template v-slot:model-grid>
            <div class="model-grid" v-if="activeIndex == 0">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-model', params: { modelname: 'series', id: model.id } })">
                    <template #card-title>{{ model.title }}</template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
                        <div class="genres">
                            Жанры:
                            <p v-for="genre in model.genres" :key="genre">{{ genre.name }}</p>
                        </div>
                        <p>Описание: {{ model.description }}</p>
                        <p>Год выхода: {{ model.year }}</p>
                    </template>
                </ModelCard>
            </div>
            <div class="model-grid" v-if="activeIndex == 1">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-model', params: { modelname: 'film', id: model.id } })">
                    <template #card-title>{{ model.title }}</template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
                        <div class="genres">
                            Жанры:
                            <p v-for="genre in model.genres" :key="genre">{{ genre.name }}</p>
                        </div>
                        <p>Описание: {{ model.description }}</p>
                        <p>Год выхода: {{ model.year }}</p>
                    </template>
                </ModelCard>
            </div>
            <div class="model-grid" v-if="activeIndex == 2">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-model', params: { modelname: 'actor', id: model.id } })">
                    <template #card-title>{{ model.name }}</template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
                        <p>Биография: {{ model.information }}</p>
                        <p>Дата рождения: {{ getLocalDate(model.birthdate) }}</p>
                    </template>
                </ModelCard>
            </div>
            <div class="model-grid" v-if="activeIndex == 3">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-model', params: { modelname: 'director', id: model.id } })">
                    <template #card-title>{{ model.name }}</template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
                        <p>Биография: {{ model.information }}</p>
                        <p>Дата рождения: {{ getLocalDate(model.birthdate) }}</p>
                    </template>
                </ModelCard>
            </div>
        </template>
        <template #model-pagination>
            <SearchPaginator :modelValue="currentPage" :page_first="page_first" :page_last="page_last" />
        </template>
    </ViewModels>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ViewModels from '../templates/ViewModels.vue';
import { convertSeries, getSeries } from '@/api/get/get_series';
import { convertMovies, getMovies } from '@/api/get/get_movies';
import SearchPaginator from '@/components/SearchPaginator.vue';
import { convertActors, getActors } from '../../../api/get/get_actors';
import { convertDirectors, getDirectors } from './api/getDirectors';
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

function getLocalDate(date: Date | undefined) {
    return date?.toLocaleDateString() ?? 'Неизвестно';
}

async function switchIndex(index: number) {
    activeIndex.value = index;
    await search();
}

async function search() {
    console.log(query.value)
    let res: any;
    try {
        switch (activeIndex.value) {
            case 0:
                res = await getSeries(query.value, pageSize, currentPage.value - 1);
                modelObjects.value = convertSeries(res.data);
                break;
            case 1:
                res = await getMovies(query.value, pageSize, currentPage.value - 1);
                modelObjects.value = convertMovies(res.data);
                break;
            case 2:
                res = await getActors(pageSize, currentPage.value - 1);
                console.log(res)
                modelObjects.value = convertActors(res.data);
                break;
            case 3:
                res = await getDirectors(pageSize, currentPage.value - 1);
                console.log(res);
                modelObjects.value = convertDirectors(res.data);
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

<style scoped>
.input-field {
    display: flex;
    gap: 1rem;
}

.model-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}
</style>