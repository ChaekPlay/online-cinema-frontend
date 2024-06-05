<template>
    <div class="watch view">
        <div class="watch-header">
            <h1 class="display-lg">Смотреть</h1>
            <a class="title-lg" @click="$router.back()">Вернуться на страницу фильма</a>
        </div>
        <div class="player">
        </div>
        <div v-if="content.seasons" class="episode-choose">
            <select name="season" id="season" class="txt-body-lg" v-model="activeSeason">
                <option v-for="(season, index) in content.seasons" :selected="index == 0" :key="season.id"
                    :value="index">Сезон {{ index +
                        1 }}
                </option>
            </select>
            <select name="episode" id="episode" class="txt-body-lg" v-model="activeEpisode">
                <option v-for="(episode, index) in content.seasons![activeSeason].episodes" :selected="index == 0"
                    :key="episode.id" :value="episode">
                    Эпизод {{ index + 1 }}</option>
            </select>
        </div>
    </div>
</template>
<script setup lang="ts">
import getMovieInfo, { convertInfo, getSeriesInfo } from '@/api/get_movie_info';
import Director from '@/models/Director';
import MediaContent from '@/models/MediaContent';
import Season from '@/models/Season';
import router from '@/router';
import { onMounted, ref } from 'vue';

let content = ref(new MediaContent({
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
    seasons: [new Season({
        id: '0',
        title: "",
        description: "",
        releaseYear: 0,
        episodes: []
    })]
}))

let activeSeason = ref(0);

let activeEpisode = ref(0);

onMounted(async () => {
    let id = router.currentRoute.value.params.id as string
    let type = router.currentRoute.value.name as string
    await getMediaContentInfo(id, type);
})

async function getMediaContentInfo(id: string, type: string) {
    let res: any;
    if (type == "movie-watch") {
        res = await getMovieInfo(id);

    }
    else {
        res = await getSeriesInfo(id);

    }
    try {
        content.value = convertInfo(res.data);
    }
    catch {
        console.log(res.error);
    }
}
</script>
<style scoped>
select {
    padding: 0.5rem 1rem;
}

.episode-choose {
    display: flex;
    gap: 1rem;
}

.watch {
    margin: 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.watch-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

a {
    color: var(--primary);
    text-decoration: none;
    cursor: pointer;
}

a:hover {
    text-decoration: underline;
}

.player {
    aspect-ratio: 16 / 9;
    width: 100%;
    background: black;
}
</style>