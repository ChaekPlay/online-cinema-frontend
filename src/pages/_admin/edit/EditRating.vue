<template>
    <div class="edit-rating">
        <EditModel :set-api="updateRating" :delete-api="removeRating" :id="rating_id" :create-api="createRating">
            <template #model-edit>
                <div class="input-field">
                    <label for="comment">Комментарий</label>
                    <textarea class="txt-body-lg" name="comment" id="comment" cols="30" rows="10"
                        v-model="review.comment"></textarea>
                </div>
                <div class="input-field">
                    <label for="rating">Рейтинг</label>
                    <div class="user-rating-indicator">
                        <input class="range-indicator" type="range" name="rating" id="rating" max="10" min="1"
                            v-model="review.rating" step="1">
                        <p class="user-rating-indicator-value headline-lg">{{ review.rating }}</p>
                    </div>
                </div>
            </template>
        </EditModel>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import EditModel from '../templates/EditModel.vue';
import { onMounted, ref } from 'vue';
import { convertRatingInfo, getRatingInfo } from '@/api/get/get_rating_info';
import { postRating } from '@/api/post/post_rating';
import { putRating } from '@/api/put/put_rating';
import { deleteRating } from '@/api/delete/delete_rating';

let rating_id = router.currentRoute.value.params.rating_id as string
let media_type = router.currentRoute.value.params.media as string
let media_id = router.currentRoute.value.params.id as string

let review = ref({
    id: 0,
    comment: "",
    rating: 5
})

async function getRating() {
    let res = { data: null, error: null }
    try {
        res = await getRatingInfo(rating_id);
        review.value = convertRatingInfo(res.data);
    }
    catch {
        console.log(res.error);
    }
}

onMounted(() => {
    getRating();
})

async function createRating() {
    let res = { data: null, error: null }
    try {
        await postRating(media_id, media_type, review.value);
    }
    catch {
        console.log(res.error);
    }
}

async function updateRating() {
    let res = { data: null, error: null }
    try {
        await putRating(media_id, media_type, review.value);
    }
    catch {
        console.log(res.error);
    }
}

async function removeRating() {
    let res = { data: null, error: null }
    try {
        await deleteRating(media_id);
    }
    catch {
        console.log(res.error);
    }
}
</script>
<style scoped>
.range-indicator {
    appearance: none;
    width: 25vw;
    height: 15px;
    border-radius: 5px;
    background: var(--primary-container-very-high);
}

.range-indicator::-webkit-slider-thumb {
    appearance: none;
    height: 50px;
    width: 15px;
    border: 2px solid var(--background);
    border-radius: 8px;
    background: var(--primary);
    cursor: ew-resize;
    transition: background .3s ease-in-out;
}

.range-indicator::-moz-range-thumb {
    appearance: none;
    height: 50px;
    width: 15px;
    border: 2px solid var(--background);
    border-radius: 8px;
    background: var(--primary);
    cursor: ew-resize;
    transition: background .3s ease-in-out;
}

.range-indicator::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
}
</style>