<template>
    <div class="user-profile view">
        <h1 class="display-lg">Профиль пользователя</h1>
        <p class="txt-body-lg">Имя: Райан Гослинг</p>
        <p class="txt-body-lg">Телефон: +7 (999) 999-99-99</p>
        <p class="txt-body-lg">Эл. почта: 0kX9e@example.com</p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.user-profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding: 2rem;
}
</style>