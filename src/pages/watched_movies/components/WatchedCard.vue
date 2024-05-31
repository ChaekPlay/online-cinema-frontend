<template>
    <div class="watched-card">
        <img class="poster" :src="props.content?.posterURI || 'https://placehold.it/200x300'" alt="Постер">
        <div class="card-info">
            <p class="title-lg">{{ content.title }}</p>
            <p class="txt-body-md">Оценка: 7.7</p>
        </div>
        <span class="clickable" @click='useWatchedListStore().removeFromWatchedList(content)'><img class="icon-lg"
                src="@/static/icons/trash.svg" alt=""></span>
    </div>
</template>
<script setup lang="ts">
import MovieInfo from '@/models/Movie';
import { useWatchedListStore } from '@/store/WatchedListStore';


const props = defineProps<{
    content: MovieInfo
}>();
</script>
<style scoped>
.watched-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--primary-container-high);
    border-radius: 1rem;
    overflow: hidden;
}

.watched-card:hover {
    cursor: pointer;
}

.clickable {
    cursor: pointer;
}

.icon-lg:hover {
    background: var(--outline);
    border-radius: 16px;
}

.watched-card .poster {
    width: 150px;
    height: 100%;
    object-fit: contain;
    border-radius: 0.75rem;
}

.card-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

span {
    padding: 3rem;
}
</style>