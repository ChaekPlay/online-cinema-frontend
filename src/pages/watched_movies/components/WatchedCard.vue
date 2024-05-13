<template>
    <div class="watched-card">
        <img class="poster" :src="content?.posterURI || 'https://placehold.it/200x300'" alt="Постер">
        <div class="card-info">
            <p class="title-lg">{{ content?.title }}</p>
            <p class="txt-body-md">Оценка: {{ content?.rating }}</p>
        </div>
        <span @click='console.log("clicked")'><img class="icon-md" src="@/static/icons/settings.svg" alt=""></span>
    </div>
</template>
<script setup lang="ts">
import WatchedMovie from '@/models/WatchedMovie';

defineProps({
    content: WatchedMovie
});
</script>
<style scoped>
.watched-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--primary-container-high);
    padding: 1rem 2rem 1rem 1rem;
    border-radius: 1rem;
}

.watched-card .poster {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 0.75rem;
}
.card-info {
    display: flex;
    align-items:baseline;
    gap: 1rem;
}
</style>