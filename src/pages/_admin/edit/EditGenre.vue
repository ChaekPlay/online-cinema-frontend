<template>
    <div class="edit-genre view">
        <EditModel :id="genre_id" :createApi="createGenre" :setApi="updateGenre" :deleteApi="removeGenre">
            <template #model-edit>
                <div class="input-field">
                    <label for="name">Название</label>
                    <input type="text" name="name" id="name" v-model="genre.name">
                </div>
            </template>
        </EditModel>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import EditModel from '../templates/EditModel.vue';
import { convertGenreInfo, getGenreInfo } from '@/api/get/get_genre_info';
import Genre from '@/models/Genre';
import { onMounted, ref } from 'vue';
import { postGenre } from '@/api/post/post_genre';
import { putGenre } from '@/api/put/put_genre';
import { deleteGenre } from '@/api/delete/delete_genre';

let genre_id = router.currentRoute.value.params.id as string
let genre = ref(new Genre({
    id: 0,
    name: ""
}))
async function getGenre() {
    let res = { data: null, error: null }
    try {
        res = await getGenreInfo(genre_id);
        genre.value = convertGenreInfo(res.data);
    }
    catch {
        console.log(res.error);
    }
}

onMounted(() => {
    getGenre();
})

async function createGenre() {
    let res = { data: null, error: null }
    try {
        await postGenre(genre.value);
    }
    catch {
        console.log(res.error);
    }
}

async function updateGenre() {
    let res = { data: null, error: null }
    try {
        await putGenre(genre.value);
    }
    catch {
        console.log(res.error);
    }
}

async function removeGenre() {
    let res = { data: null, error: null }
    try {
        await deleteGenre(genre.value);
    }
    catch {
        console.log(res.error);
    }
}
</script>

<style scoped></style>