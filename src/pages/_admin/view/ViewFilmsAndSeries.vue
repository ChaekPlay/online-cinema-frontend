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
            <button class="btn btn-primary" @click="createModel">Создать <img src="@/static/icons/plus.svg"
                    alt="создать"></button>
            <div class="model-grid" v-if="activeIndex == 0">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-media', params: { id: model.id, media: 'series' } })">
                    <template #card-title> <img :src="model.previewImageURL" alt="">
                        <p>{{ model.title }}</p>
                    </template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
                        <p>Жанры: {{ model.genres?.map((g: any) => g.name).join(', ') ?? '' }}</p>
                        <p>Описание: {{ model.description }}</p>
                        <p>Год выхода: {{ getLocalDate(model.releaseDate) }}</p>
                    </template>
                </ModelCard>
            </div>
            <div class="model-grid" v-if="activeIndex == 1">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-media', params: { id: model.id, media: 'movie' } })">
                    <template #card-title><img :src="model.previewImageURL" alt="">
                        <p>{{ model.title }}</p>
                    </template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
                        <p>Жанры: {{ model.genres?.map((g: any) => g.name).join(', ') ?? '' }}</p>
                        <p>Описание: {{ model.description?.substring(0, 100) + '...' ?? '' }}</p>
                        <p>Дата выхода: {{ getLocalDate(model.releaseDate) }}</p>
                    </template>
                </ModelCard>
            </div>
            <div class="model-grid" v-if="activeIndex == 2">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-person', params: { id: model.id, person: 'actor' } })">
                    <template #card-title><img :src="model.actorImageURL" alt="">
                        <p>{{ model.name }}</p>
                    </template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
                        <p>Биография: {{ model.information?.substring(0, 100) + '...' ?? ' ' }}</p>
                        <p>Дата рождения: {{ getLocalDate(model.birthdate) }}</p>
                    </template>
                </ModelCard>
            </div>
            <div class="model-grid" v-if="activeIndex == 3">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-person', params: { id: model.id, person: 'director' } })">
                    <template #card-title><img :src="model.directorImageURL ?? 'https://placehold.it/300x400'" alt="">
                        <p>{{ model.title }}</p>
                    </template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
                        <p>Биография: {{ model.information?.substring(0, 100) + '...' ?? '' }}</p>
                        <p>Дата рождения: {{ getLocalDate(model.birthdate) }}</p>
                    </template>
                </ModelCard>
            </div>
            <div class="model-grid" v-if="activeIndex == 4">
                <ModelCard v-for="model in modelObjects" :key="model.id" :objectid="model.id"
                    @click="$router.push({ name: 'edit-genre', params: { id: model.id } })">
                    <template #card-title>{{ model.name }}</template>
                    <template #card-content>
                        <p>ID: {{ model.id }}</p>
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
import { convertDirectors, getDirectors } from '../../../api/get/get_directors';
import ModelCard from '../templates/ModelCard.vue';
import router from '@/router';
import { convertGenres, getGenres } from '@/api/get/get_genres';

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
    },
    {
        id: 4,
        name: 'Жанры'
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

function createModel() {
    switch (activeIndex.value) {
        case 0:
        case 1:
            router.push({ name: 'create-media' });
            break;
        case 2:
            router.push({ name: 'create-actor' });
            break;
        case 3:
            router.push({ name: 'create-director' });
            break;
        case 4:
            router.push({ name: 'create-genre' });
            break;
        default:
            break;
    }
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
            case 4:
                res = await getGenres(pageSize, currentPage.value - 1);
                modelObjects.value = convertGenres(res.data);
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

.model-grid img {
    width: 300px;
    height: 600px;
    object-fit: cover;
    overflow: hidden;
}
</style>