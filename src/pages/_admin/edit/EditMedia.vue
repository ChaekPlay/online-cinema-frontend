<template>
    <div class="edit-film view">
        <EditModel :set-api="editFilm" :delete-api="deleteFilm" :id="film_id" :create-api="createFilm">
            <template #model-edit>
                <div class="input-field">
                    <label for="title">Название</label>
                    <input class="txt-body-lg" type="text" name="title" id="title" v-model="film.title">
                </div>
                <div class="input-field">
                    <label for="description">Описание</label>
                    <textarea class="txt-body-lg" name="description" id="description" cols="30" rows="10"
                        v-model="film.description"></textarea>
                </div>
                <div class="input-field">
                    <label>Дата</label>
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
                        :selected-options="film.actors" :displayText="'Актеры'" />
                </div>
                <div class="input-field" v-if="loaded">
                    <label for="director">Режиссер</label>
                    <p>Выбран: {{ film.director.name }}</p>
                    <p>Новый режиссер:</p>
                    <select name="director" id="director" class="txt-body-lg" v-model="film.director">
                        <option v-for="director in available_directors" :selected="director.id == film.director.id"
                            :key="director.id" :value="director">{{
                                director.name }}</option>
                    </select>
                </div>
                <div class="input-field">
                    <label for="imageURL">Изображение</label>
                    <p>Текущее изображение: <img width="200" height="200" :src="film.previewImageURL ?? ''"
                            alt="изображение"></p>
                    <input type="file" @change="onFileChange" name="imageURL" id="imageURL">
                </div>
                <div class="input-group">
                    <div class="input-field" v-if="loaded && media_type == 'series'">
                        <button :disabled="!film_id" class="btn btn-primary"
                            @click.prevent="$router.push({ name: 'view-seasons', params: { id: film_id } })">Сезоны</button>
                        <p v-if="!film_id">Создайте сериал, прежде, чем перейти к созданию
                            сезонов</p>
                    </div>
                    <div class="input-field">
                        <button :disabled="!loaded || !film_id" class="btn btn-primary"
                            @click.prevent="$router.push({ name: 'view-ratings', params: { id: film_id } })">Рецензии</button>
                        <p v-if="!film_id">Создайте {{ media_type == 'movie' ? 'фильм' : 'сериал' }}, прежде, чем
                            перейти к рецензиям</p>
                    </div>
                </div>
            </template>
        </EditModel>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EditModel from '../templates/EditModel.vue';
import getMovieInfo, { convertInfo, getSeriesInfo } from '@/api/get/get_movie_info';
import router from '@/router';
import MediaContent from '@/models/MediaContent';
import SelectPicker from '@/components/SelectPicker.vue';
import { convertGenres, getGenres } from '@/api/get/get_genres';
import Genre from '@/models/Genre';
import Actor from '@/models/Actor';
import { getActors, convertActors } from '../../../api/get/get_actors';
import { editMovie } from '@/api/put/edit_movie';
import { createMovie } from '@/api/post/create_movie';
import Director from '@/models/Director';
import { convertDirectors, getDirectors } from '@/api/get/get_directors';
import { deleteMovie } from '@/api/delete/delete_movie';
import { getImageURL, uploadFile } from '@/api/post/upload_file';
import { putSeries } from '@/api/put/put_series';
import { deleteSeries } from '@/api/delete/delete_series';
import { postSeries } from '@/api/post/post_series';
let media_type = router.currentRoute.value.params.media?.toString() ?? null;
let film_id: string = router.currentRoute.value.params.id?.toString() ?? null;
let film = ref(new MediaContent({
    id: 0,
    title: "",
    releaseDate: new Date(),
    genres: [],
    previewImageURL: "",
    description: "",
    rating: 0,
    actors: [],
    director: new Director({
        id: 0,
        name: "",
        birthdate: new Date(),
        information: ""
    }
    ),
    seasons: []
}));
let available_genres = ref([] as Genre[]);
let available_actors = ref([] as Actor[]);
let available_directors = ref([] as Director[]);
let loaded = ref(false);
let date = ref({
    year: 0,
    month: 0,
    day: 0
});
let current_file = ref(new File([], ""));
let needs_upload = ref(false);

onMounted(async () => {
    let res = {
        data: null, error: null
    }
    try {
        await getAvailableGenres();
        await getAvailableActors();
        await getAvailableDirectors();
        if (film_id == null) return
        if (media_type == "film")
            res = await getMovieInfo(film_id);
        else
            res = await getSeriesInfo(film_id);
        film.value = convertInfo(res.data);
        console.log(film.value);
        date.value.day = film.value.releaseDate?.getDate() ?? 0;
        date.value.month = film.value.releaseDate?.getMonth() ?? 0;
        date.value.year = film.value.releaseDate?.getFullYear() ?? 0;
        available_genres.value = available_genres.value.filter(genre => !film.value.genres.find(g => g.id != genre.id));
        available_actors.value = available_actors.value.filter(actor => !film.value.actors?.find(a => a.id == actor.id));
    }
    catch (error) {
        console.log(res.error);
    }
    finally {
        loaded.value = true;
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

async function getAvailableDirectors() {
    let res = { data: null, error: null }
    try {
        res = await getDirectors(1000, 0);
        available_directors.value = convertDirectors(res.data);
    }
    catch (error) {
        console.log(res.error);
    }
}

async function createFilm() {
    if (needs_upload.value) {
        let res = await uploadFile(current_file.value);
        let url = getImageURL(res.data);
        console.log(url);
        film.value.previewImageURL = url;
    }
    film.value.releaseDate = new Date(date.value.year, date.value.month, date.value.day);
    if (media_type == "film")
        await createMovie(film.value);
    else
        await postSeries(film.value);
    router.push('/admin/models');
}

async function editFilm() {
    if (needs_upload.value) {
        let res = await uploadFile(current_file.value);
        let url = getImageURL(res.data);
        film.value.previewImageURL = url;
    }
    film.value.releaseDate = new Date(date.value.year, date.value.month, date.value.day);
    if (media_type == "film")
        await editMovie(film.value);
    else
        await putSeries(film.value);
    router.push('/admin/models');
}

async function deleteFilm() {
    if (!confirm(`Вы уверены, что хотите удалить ${media_type == "movie" ? "фильм" : "сериал"} ?`)) return;
    if (media_type == "film")
        await deleteMovie(film_id);
    else
        await deleteSeries(film_id);
    router.push('/admin/models');
}

function onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file.size > 1048576) {
        alert("Файл слишком большой, размер не должен превышать 1 МБ");
        event.target.value = "";
        return;
    }
    current_file.value = file;
    needs_upload.value = true;
}

</script>
<style scoped></style>