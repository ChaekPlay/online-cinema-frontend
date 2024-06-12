<template>
    <div class="view">
        <form @submit.prevent="register" class="register-form">
            <h1 class="display-lg">Регистрация</h1>
            <div class="input-field">
                <label for="name">Имя</label>
                <input type="text" name="name" id="name" v-model="credentials.name">
            </div>
            <div class="input-field">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="credentials.email">
            </div>
            <div class="input-field">
                <label for="phone">Телефон</label>
                <input type="text" name="phone" id="phone" v-model="credentials.phoneNumber">
            </div>
            <div class="input-field">
                <label for="password1">Пароль</label>
                <input type="password" name="password1" id="password1" v-model="credentials.password1">
            </div>
            <div class="input-field">
                <label for="password2">Повторите пароль</label>
                <input type="password" name="password2" id="password2" v-model="credentials.password2">
            </div>
            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
        </form>
    </div>
</template>
<script setup lang="ts">
import User from '@/models/User';
import { UserRole } from '@/models/UserRole';
import { useUserStore } from '@/store/UserStore';
import { ref } from 'vue';


const userStore = useUserStore();

const credentials = ref({
    name: '',
    email: '',
    phoneNumber: '',
    password1: '',
    password2: ''
})

async function register() {
    if (credentials.value.password1 !== credentials.value.password2) {
        console.log(credentials.value.password1, credentials.value.password2)
        alert('Пароли не совпадают')
        return
    }
    await userStore.register(new User({
        name: credentials.value.name,
        email: credentials.value.email,
        phoneNumber: credentials.value.phoneNumber,
        password: credentials.value.password1,
        userRole: UserRole.ROLE_ADMIN
    }
    ))
}
</script>
<style scoped>
.register-form {
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