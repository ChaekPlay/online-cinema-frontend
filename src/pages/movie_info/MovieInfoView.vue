<template>
    <section class="movie-info view">
        <img class="poster" src="https://placehold.it/500x850" alt="постер">
        <div class="movie-info-container">
            <div class="movie-info-actions">
                <div class="movie-action-bar">
                    <button class="btn btn-accent btn-icon-text watch label-lg"><img class="icon-sm"
                            src="@/static/icons/watch.svg" alt="смотреть">Смотреть</button>
                    <button class="btn btn-icon btn-primary"><img class="icon-sm" src="@/static/icons/bookmark.svg"
                            alt="добавить в список просмотренного"></button>
                </div>
                <div class="movie-rating">
                    <h3 class="headline-lg">Общая оценка:</h3>
                    <p class="display-lg">9.1</p>
                    <button class="btn btn-glass label-lg">Оценки и рецензии</button>
                </div>
            </div>
            <div class="movie-description">
                <h2 class="headline-lg">Название фильма</h2>
                <p class="body-lg">Режиссер: lorem ipsum</p>
                <h3 class="title-md">Описание</h3>
                <p class="body-lg description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor
                    doloremque
                    veritatis ipsum
                    soluta expedita delectus, laborum asperiores facilis, fugiat eligendi. Architecto eum aut maxime ea
                    odit dignissimos, perspiciatis nesciunt!</p>
            </div>
            <div class="movie-actors">
                <h3 class="title-md">Актерский состав</h3>
                actors<!-- actors module here -->
            </div>
        </div>
    </section>
</template>
<style scoped>
.movie-info {
    margin: 2rem 10rem;
    display: flex;
    gap: 3rem;
}

.poster {
    border-radius: 1rem;
    border: 1px solid var(--outline);
}

.movie-actors {
    margin-top: 3rem;
}

.movie-info-container {
    width: 100%;
}

.movie-info-actions {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
}

.movie-action-bar {
    display: flex;
    align-items: start;
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
</style>
<script setup lang="ts">
import { onMounted } from 'vue';
import getMovieInfo from './api/get_movie_info';

onMounted(() => {
    console.log(getMovieInfo(1));
})
</script>