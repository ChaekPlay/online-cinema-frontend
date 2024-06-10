<template>
    <div class="edit-film view">
        <EditModel :set-api="editFilm" :delete-api="deleteFilm" :id="film_id">
            <template #model-edit>
                <div class="input-field">
                    <label for="description">Название</label>
                    <input class="txt-body-lg" type="text" name="title" id="title" v-model="film.title">
                </div>
                <div class="input-field">
                    <label for="description">Описание</label>
                    <textarea class="txt-body-lg" name="description" id="description" cols="30" rows="10"
                        v-model="film.description"></textarea>
                </div>
                <div class="input-field">
                    <label for="year">Год</label>
                    <div class="input-group">
                        <input type="number" name="releaseDay" id="releaseDay" v-model="date.day">
                        <input type="number" name="releaseMonth" id="releaseMonth" v-model="date.month">
                        <input type="number" name="releaseYear" id="releaseYear" v-model="date.year">
                    </div>

                </div>
                <div class="input-field" v-if="loaded">
                    <SelectPicker :options="available_genres" :placeholder="'Выберите жанр'"
                        :selected-options="film.genres" :displayText="'Жанр'" />
                </div>
                <div class="input-field" v-if="loaded">
                    <SelectPicker :options="available_actors" :placeholder="'Выберите актера'"
                        :selected-options="film.actors ?? []" :displayText="'Актеры'" />
                </div>
            </template>
        </EditModel>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EditModel from '../templates/EditModel.vue';
import getMovieInfo, { convertInfo } from '@/api/get/get_movie_info';
import router from '@/router';
import type MediaContent from '@/models/MediaContent';
import SelectPicker from '@/components/SelectPicker.vue';
import { convertGenres, getGenres } from '@/api/get/get_genres';
import type Genre from '@/models/Genre';
import type Actor from '@/models/Actor';
import { getActors, convertActors } from '../../../api/get/get_actors';
import { editMovie } from '@/api/put/edit_movie';

let film_id: string = router.currentRoute.value.params.id.toString();
let film = ref({} as MediaContent);
let available_genres = ref([] as Genre[]);
let available_actors = ref([] as Actor[]);
let loaded: boolean = false
let date = ref({
    year: 0,
    month: 0,
    day: 0
});

onMounted(async () => {
    if (film_id == undefined) return;
    let res = {
        data: null, error: null
    }
    try {
        await getAvailableGenres();
        await getAvailableActors();
        res = await getMovieInfo(film_id);
        film.value = convertInfo(res.data);
        date.value.day = film.value.releaseDate?.getDay() ?? 0;
        date.value.month = film.value.releaseDate?.getMonth() ?? 0;
        date.value.year = film.value.releaseDate?.getFullYear() ?? 0;
        available_genres.value = available_genres.value.filter(genre => !film.value.genres.find(g => g.id != genre.id));
        available_actors.value = available_actors.value.filter(actor => !film.value.actors?.find(a => a.id == actor.id));
    }
    catch (error) {
        console.log(res.error);
    }
    finally {
        loaded = true;
    }
})

async function getAvailableGenres() {
    let res = { data: null, error: null }
    try {
        res = await getGenres();
        available_genres.value = convertGenres(res.data);
    }
    catch (error) {
        console.log(res.error);
    }
}

async function getAvailableActors() {
    let res = { data: null, error: null }
    try {
        res = await getActors(1000, 0);
        available_actors.value = convertActors(res.data);
    }
    catch (error) {
        console.log(res.error);
    }
}

async function editFilm() {
    film.value.releaseDate = new Date(date.value.year, date.value.month, date.value.day);
    console.log(film.value);
    //await editMovie(film.value);
    router.push('/admin/models');
}

function deleteFilm() {
    console.log(film.value);
}

</script>
<style scoped>
.input-field {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.input-group {
    display: flex;
    gap: 1rem;
}

textarea {
    resize: vertical;
    padding: 1rem;
}
</style>