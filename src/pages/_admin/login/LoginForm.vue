<template>
    <div class="view">
        <form @submit.prevent="login" class="login-form">
            <h1 class="display-lg">Авторизация</h1>
            <div class="input-field">
                <label for="email">Эл. почта</label>
                <input type="email" name="email" id="email" v-model="credentials.email">
            </div>
            <div class="input-field">
                <label for="password">Пароль</label>
                <input type="password" name="password" id="password" v-model="credentials.password">
            </div>
            <button type="submit" class="btn btn-primary">Войти</button>
        </form>

    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/UserStore';
import { ref } from 'vue';

const userStore = useUserStore();

const credentials = ref({
    email: '',
    password: ''
})

async function login() {
    await userStore.login(credentials.value.email)
}
</script>
<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding: 2rem;
}

button {
    align-self: center;
}
</style>