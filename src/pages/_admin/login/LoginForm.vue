<template>
    <div class="login-form view">
        <h1 class="display-lg">Авторизация</h1>
        <div class="input-field">
            <label for="email">Эл. почта</label>
            <input type="email" name="email" id="email">
        </div>
        <div class="input-field">
            <label for="password">Пароль</label>
            <input type="password" name="password" id="password">
        </div>
        <button class="btn btn-primary">Войти</button>
    </div>
</template>

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