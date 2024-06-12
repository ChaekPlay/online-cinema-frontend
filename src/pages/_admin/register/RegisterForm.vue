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
            <div class="input-field">
                <label for="imageURL">Изображение</label>
                <input type="file" @change="onFileChange" name="imageURL" id="imageURL">
            </div>
            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { getImageURL, uploadFile } from '@/api/post/upload_file';
import User from '@/models/User';
import { UserRole } from '@/models/UserRole';
import router from '@/router';
import { useUserStore } from '@/store/UserStore';
import { ref } from 'vue';


const userStore = useUserStore();

const credentials = ref({
    name: '',
    email: '',
    phoneNumber: '',
    password1: '',
    password2: '',
    profileImageURL: ''
})

let current_file = ref({} as File)



async function register() {
    if (credentials.value.password1 !== credentials.value.password2) {
        console.log(credentials.value.password1, credentials.value.password2)
        alert('Пароли не совпадают')
        return
    }
    let res = await uploadFile(current_file.value);
    let url = getImageURL(res.data);
    credentials.value.profileImageURL = url;
    if (await userStore.register(new User({
        name: credentials.value.name,
        email: credentials.value.email,
        phoneNumber: credentials.value.phoneNumber,
        password: credentials.value.password1,
        profileImageURL: credentials.value.profileImageURL,
        userRole: UserRole.ROLE_ADMIN
    })))
        router.replace('/profile')

}
function onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file.size > 1048576) {
        alert("Файл слишком большой, размер не должен превышать 1 МБ");
        event.target.value = "";
        return;
    }
    current_file.value = file;
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