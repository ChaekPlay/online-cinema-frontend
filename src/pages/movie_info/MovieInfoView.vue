<template>
    <section class="movie-info view">
        <img class="poster" src="https://placehold.it/500x850" alt="постер">
        <div class="movie-info-container">
            <div class="movie-info-actions">
                <div class="movie-action-bar">
                    <button class="btn btn-accent btn-icon-text watch label-lg" @click="$router.push('watch')"><img
                            class="icon-sm" src="@/static/icons/watch.svg" alt="смотреть">Смотреть</button>
                    <button v-if="!isAddedToWatchedList()" @click="addToWatchList" class="btn btn-icon btn-primary"><img
                            class="icon-lg" src="@/static/icons/bookmark.svg"
                            alt="добавить в список просмотренного"></button>
                    <button v-if="isAddedToWatchedList()" @click="removeFromWatchList"
                        class="btn btn-icon btn-danger"><img class="icon-lg" src="@/static/icons/trash.svg"
                            alt="удалить"></button>
                </div>
                <div class="movie-rating">
                    <h3 class="headline-lg">Общая оценка:</h3>
                    <p class="display-lg">9.1</p>
                    <button class="btn btn-glass label-lg overlay" @click="$router.push('reviews')">Оценки и
                        рецензии</button>
                </div>
            </div>
            <div class="movie-description">
                <h2 class="headline-lg">{{ movie.title }}</h2>
                <p class="body-lg">Режиссер: {{ movie.director!.name }}</p>
                <h3 class="title-md">Описание</h3>
                <p class="body-lg description">{{ movie.description }}</p>
                <p v-if="movie.seasons" class="body-lg">Количество сезонов: {{ movie.seasons }}</p>
            </div>
            <div class="movie-actors">
                <h3 class="title-md">Актерский состав</h3>
                <div class="actor-list">
                    <ActorCard v-for="actor in movie.actors" :actor="actor" :key="actor.id"
                        @click="$router.push({ name: 'actor', params: { id: actor.id } })" />
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.movie-info {
    margin: 2rem auto;
    display: flex;
    gap: 3rem;
    align-items: start;
    max-width: 100vw;
}

.poster {
    border-radius: 1rem;
    border: 1px solid var(--outline);
}

.movie-actors {
    margin-top: 3rem;
}

.movie-info-container {
    display: flex;
    flex-direction: column;
}

.movie-info-actions {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
}

.movie-action-bar {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 0.5rem;
}

.movie-rating {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
}

.movie-description {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: -6rem;
}

.description {
    text-align: justify;
    max-width: 610px;
}

.overlay {
    z-index: 1;
}

.movie-actors {
    width: clamp(600px, 50vw, 1000px);
}

.actor-list {
    margin-top: 2rem;
    display: flex;
    scrollbar-color: var(--primary) var(--background);
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}

@media screen and (max-width: 1200px) {
    .movie-info {
        flex-direction: column;
    }

    .movie-actors {
        width: clamp(300px, 90vw, 900px);
    }
}
</style>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import getMovieInfo, { convertInfo, getSeriesInfo } from '../../api/get_movie_info';
import MediaContent from '@/models/MediaContent';
import ActorCard from './components/ActorCard.vue';
import router from '@/router';
import Director from '@/models/Director';
import { useWatchedListStore } from '@/store/WatchedListStore';
let movie = ref(new MediaContent({
    id: 0,
    title: "",
    year: 0,
    genres: [],
    posterURI: "",
    description: "",
    rating: 0,
    actors: [],
    director: new Director({
        id: 0,
        name: "",
        birthdate: new Date(),
        information: ""
    }
    ),
    seasons: []
}));
const watchedStore = useWatchedListStore();
onMounted(async () => {
    let id = router.currentRoute.value.params.id ?? "";
    let type = router.currentRoute.value.name;
    let res: any;
    if (type === "movie") {
        res = await getMovieInfo(id);
    }
    else {
        res = await getSeriesInfo(id);
    }
    try {
        movie.value = convertInfo(res.data);
    }
    catch {
        console.log(res.error);
    }
})
function addToWatchList() {
    watchedStore.addToWatchedList(movie.value);
}
function removeFromWatchList() {
    watchedStore.removeFromWatchedList(movie.value);
}
function isAddedToWatchedList() {
    return watchedStore.isAddedToWatchedList(movie.value);
}
</script>