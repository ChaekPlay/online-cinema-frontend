<template>
    <div class="user-profile view">
        <h1 class="display-lg">Профиль пользователя</h1>
        <div class="login-link" v-if="!loggedIn">
            <p>Вы не вошли в систему</p>
            <router-link to="/login">Войти</router-link>
        </div>
        <div class="profile" v-if="loggedIn">
            <p class="txt-body-lg">Имя: {{ userStore.user.name }}</p>
            <p class="txt-body-lg">Телефон: {{ userStore.user.phoneNumber }}</p>
            <p class="txt-body-lg">Эл. почта: {{ userStore.user.email }}</p>
        </div>
        <button @click="userStore.logout" class="btn btn-primary">Выйти</button>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/UserStore';
import { onMounted, ref } from 'vue';


const userStore = useUserStore();

let loggedIn = ref(false)

onMounted(() => {
    if (userStore.isEmpty()) {
        loggedIn.value = false
    } else {
        loggedIn.value = true
        console.log(userStore.user)
    }
})
</script>

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

.profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding: 2rem;
}
</style>