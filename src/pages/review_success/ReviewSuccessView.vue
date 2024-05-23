<template>
    <div class="review-success view">
            <img src="@/static/icons/checked.svg">
            <h1 class="display-lg">Рецензия отправлена!</h1>
            <button class="btn btn-primary headline-lg" @click="$router.go(-2)">Вернуться к рецензиям</button>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
    .review-success {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
</style>