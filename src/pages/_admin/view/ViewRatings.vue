<template>
    <div class="view-ratings view">
        <ViewModels :title="'Рецензии'">
            <template #model-search>
            </template>
            <template #model-switch>
            </template>
            <template #model-grid>
                <div class="input-group">
                    <button class="btn btn-primary" @click="createRating">Написать рецензию</button>
                </div>
                <div class="model-grid">
                    <ReviewCard @click="router.push({ name: 'edit-rating', params: { rating_id: rating.id } })"
                        v-for="rating in ratings" :key="rating.id" :content="rating" />
                </div>
            </template>
            <template #model-pagination>
                <SearchPaginator :modelValue="currentPage" :page_first="page_first" :page_last="page_last"
                    @update:model-value="changePage" />
            </template>
        </ViewModels>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import ViewModels from '../templates/ViewModels.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import { convertRatings, getRatings } from '@/api/get/get_ratings';
import type Review from '@/models/Review';
import { onMounted, ref } from 'vue';
import SearchPaginator from '@/components/SearchPaginator.vue';
import { getLastPage } from '@/helpers/get_last_page';

let ratings = ref([] as Review[]);
let pageSize = 9;
let currentPage = ref(1);
let page_first = ref(1);
let page_last = ref(1);

onMounted(async () => {
    await getReviews();
})

async function getReviews() {
    let res = { data: null, error: null, totalCount: null };
    try {
        res = await getRatings(pageSize, currentPage.value - 1);
        ratings.value = convertRatings(res.data);
        page_last.value = getLastPage(res.totalCount ?? 0, pageSize);
    } catch (error) {
        console.log(res.error);
    }
}
function createRating() {
    router.push({ name: 'create-rating' });
}

async function changePage(page: number) {
    currentPage.value = page;
    await getReviews();
}
</script>

<style scoped>
.model-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}
</style>