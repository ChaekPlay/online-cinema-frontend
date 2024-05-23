<template>
    <div class="actor-info view">
        <img class="poster" src="https://placehold.it/500x850" alt="постер">
        <div class="actor-info-container">
            <div class="actor-description">
                <h2 class="headline-lg">Имя Фамилия</h2>
                <h3 class="title-md">Биография</h3>
                <p class="body-lg description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor
                    doloremque
                    veritatis ipsum
                    soluta expedita delectus, laborum asperiores facilis, fugiat eligendi. Architecto eum aut maxime ea
                    odit dignissimos, perspiciatis nesciunt!</p>
            </div>
            <div class="actor-roles">
                <h3 class="title-md">Роли актера</h3>
                <div class="actor-roles-list">
                    <MovieCard v-for="movieRole in movieRoles" :movieRole="movieRole" :key="movieRole.id" @click="$router.replace('/movie/1')"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import MovieRole from '@/models/MovieRole';
import MovieCard from './components/MovieCard.vue';

const movieRoles = [
    new MovieRole({id: 1, title: 'Титаник', role: 'Актер'}),
    new MovieRole({id: 2, title: 'Титаник', role: 'Актер'}),
    new MovieRole({id: 3, title: 'Титаник', role: 'Актер'}),
]

</script>
<style scoped>
.actor-info {
    margin: 2rem auto; 
    display: flex;
    gap: 3rem;
    align-items: start;
    max-width:100vw;
}

.poster {
    border-radius: 1rem;
    border: 1px solid var(--outline);
}

.actor-info-container {
    display: flex;
    flex-direction: column;
}

.actor-description {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.description {
    text-align: justify;
    max-width: 610px;
}

.overlay {
    z-index: 1;
}
.actor-roles {
    width: clamp(600px, 50vw, 1000px);
    margin-top: 3rem;
}
.actor-roles-list {   
    margin-top: 2rem;
    display: flex;
    scrollbar-color: var(--primary) var(--background);
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}
@media screen and (max-width: 1200px) {
    .actor-info {
        flex-direction: column;
    }
    .actor-roles {
        width: clamp(300px, 90vw, 900px);
    }
}
</style>