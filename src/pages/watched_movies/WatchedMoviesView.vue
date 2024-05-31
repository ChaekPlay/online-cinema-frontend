<template>
    <div class="watched-movies view">
        <h1 class="display-lg">Просмотренные фильмы</h1>
        <p class="txt-body-lg empty-text " v-if="store.watchedList.length == 0">Здесь пусто... Фильмы можно добавить
            со
            страницы
            фильма</p>
        <div class="watched-grid">
            <WatchedCard v-for="card in store.watchedList" :key="card.id" :content="card" />
        </div>
    </div>
</template>

<script setup lang="ts">
import WatchedCard from './components/WatchedCard.vue';
import { useWatchedListStore } from '@/store/WatchedListStore';

let store = useWatchedListStore();

</script>
<style scoped>
.watched-movies {
    margin: 2rem auto;
}

.empty-text {
    margin-top: 2rem;
}

.watched-grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}
</style>