<template>
    <div class="search-result-card">
        <img width="200" height="400" :src="content.previewImageURL ?? 'https://placehold.it/200x300'" alt="Постер">
        <div class="search-result-card-content">
            <div class="search-result-card-content-header">
                <div class="search-result-card-content-header-info">
                    <h3>{{ content.title }}</h3>
                    <p>Год выхода: {{ content.releaseDate.getFullYear() }}</p>
                </div>
                <span class="search-result-card-rating">{{ content.rating ?? '--' }}</span>
            </div>
            <p>{{ content.description.substring(0, 100) + '...' }}
            </p>
            <p>{{ parseGenres(content.genres) }}</p>
            <p v-if="content.seasons">Количество сезонов: {{ content.seasons }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type Genre from '@/models/Genre';
import type MediaContent from '@/models/MediaContent';

defineProps<{
    'content': MediaContent
}>()

function parseGenres(genres: Genre[] | undefined) {
    if (!genres) return '--';
    return genres.map(genre => genre.name).join(', ');
}

</script>
<style scoped>
.search-result-card {
    margin-bottom: 16px;
    background: var(--primary-container-high);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--outline);
}

.search-result-card img {
    width: 100%;
}

.search-result-card-rating {
    font-size: 2rem;
    color: limegreen;
}

.search-result-card p {
    color: var(--container-text);
}

.search-result-card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.search-result-card-content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search-result-card-content-header-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.search-result-card-content-header-info h3 {
    font-size: 2rem;
}
</style>