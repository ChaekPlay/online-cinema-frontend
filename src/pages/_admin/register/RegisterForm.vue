<template>
    <div class="register-form view">
        <h1 class="display-lg">Регистрация</h1>
        <div class="input-field">
            <label for="name">Имя</label>
            <input type="text" name="name" id="name">
        </div>
        <div class="input-field">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
        </div>
        <div class="input-field">
            <label for="phone">Телефон</label>
            <input type="text" name="phone" id="phone">
        </div>
        <div class="input-field">
            <label for="password1">Пароль</label>
            <input type="password1" name="password1" id="password1">
        </div>
        <div class="input-field">
            <label for="password2">Повторите пароль</label>
            <input type="password2" name="password2" id="password2">
        </div>
        <button class="btn btn-primary">Зарегистрироваться</button>
    </div>
</template>
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