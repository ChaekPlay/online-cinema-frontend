<template>
    <div class="watched-movies view">
        <WatchedCard v-for="card in examples" :key="card.id" :content="card"/>
    </div>
</template>

<script setup lang="ts">
import WatchedMovie from '@/models/WatchedMovie';
import WatchedCard from './components/WatchedCard.vue';

const card = new WatchedMovie(
    {
        posterURI: "https://placehold.it/100x100",
        title: "Гарри поттер и кубок огня",
        rating: 9.1,
        id: 1,
        year: 2003
    }
);
let examples: WatchedMovie[] = [];
for(let i = 0; i < 10; i++) {
    examples.push(card);
    card.id++;
}

</script>
<style scoped>

.watched-movies {
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    column-gap: 4rem;
}
</style>