<template>
    <div class="watched-card">
        <div class="card-header">
            <img class="poster" width="200" height="300"
                :src="props.content?.previewImageURL || 'https://placehold.it/200x300'" alt="Постер">
            <div class="card-info">
                <p class="title-lg">{{ content.title }}</p>
                <p class="txt-body-md">Оценка: 7.7</p>
            </div>
        </div>
        <div class="card-action">
            <span class="clickable" @click='useWatchedListStore().removeFromWatchedList(content)'><img class="icon-lg"
                    src="@/static/icons/trash.svg" alt="удалить"></span>
        </div>
    </div>
</template>
<script setup lang="ts">
import MovieInfo from '@/models/MediaContent';
import { useWatchedListStore } from '@/store/WatchedListStore';


const props = defineProps<{
    content: MovieInfo
}>();
</script>
<style scoped>
.watched-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

span:hover {
    background: var(--outline);
    border-radius: 16px;
}

.poster {
    width: 150px;
    height: 100%;
    object-fit: contain;
    border-radius: 0.75rem;
}

.card-header {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.card-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.card-action {
    display: flex;
}

span {
    padding: 1rem;
}
</style>