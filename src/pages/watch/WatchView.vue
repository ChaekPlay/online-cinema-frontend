<template>
    <div class="watch view">
        <div class="watch-header">
            <h1 class="display-lg">Смотреть</h1>
            <a class="title-lg" @click="$router.back()">Вернуться на страницу фильма</a>
        </div>
        <div class="player">
        </div>
        <div class="episode-choose">
            <select name="season" id="season" class="txt-body-lg">
                <option v-for="season in 10" :key="season" :value="season">Сезон {{ season }}</option>
            </select>
            <select name="episode" id="episode" class="txt-body-lg">
                <option v-for="episode in 10" :key="episode" :value="episode">Эпизод {{ episode }}</option>
            </select>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
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