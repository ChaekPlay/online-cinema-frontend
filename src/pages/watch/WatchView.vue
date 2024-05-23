<template>
    <div class="watch view">
        <div class="watch-header">
            <h1 class="display-lg">Смотреть</h1>
            <a class="title-lg" @click="$router.back()">Вернуться на страницу фильма</a>
        </div>
        <div class="player">
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