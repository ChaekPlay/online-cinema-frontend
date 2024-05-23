<template>
    <div class="movie-card">
        <img src="https://placehold.it/200x300" alt="постер">
        <div class="movie-role-description">
            <h4 class="txt-body-lg">{{ movieRole?.title }}</h4>
            <p class="txt-body-md">{{ movieRole?.role }}</p>
        </div>
    </div>
</template>
<style scoped>
.movie-card {
    width: 200px;
    display: flex;
    flex-direction: column;
    background: var(--primary-container);
    border: 2px solid var(--outline );
    border-radius: 1rem;
    overflow: hidden;
    flex: 0 0 auto;
    scroll-snap-align: start;
}
.movie-card img {
    object-fit:contain;
}
.movie-role-description {
    padding: 1rem;
}
</style>
<script setup lang="ts">
import MovieRole from '@/models/MovieRole';

defineProps({
    movieRole: MovieRole
});
</script>