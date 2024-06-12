<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './store/UserStore';

const userStore = useUserStore();
</script>

<template>
  <header>
    <RouterLink to="/" class="logo" href="">Фильмотека</RouterLink>
    <nav>
      <RouterLink to="/" class="headline-sm">Главная</RouterLink>
      <RouterLink to="/watched-movies" class="headline-sm">Список просмотренного</RouterLink>
      <RouterLink to="/login" class="headline-sm" v-if="userStore.isEmpty()">Авторизация</RouterLink>
      <RouterLink to="/register" class="headline-sm" v-if="userStore.isEmpty()">Регистрация</RouterLink>
      <RouterLink to="/profile" class="headline-sm" v-if="!userStore.isEmpty()">Профиль</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer>
    <section class="links">
      <a href="https://vk.com/chaekplay"><img src="@/static/icons/vk.svg" alt="vk"></a>
      <a href="https://t.me/icy0o"><img src="@/static/icons/telegram.svg" alt="telegram"></a>
      <a href="https://github.com/ChaekPlay"><img src="@/static/icons/github.svg" alt="gihub"></a>
    </section>
    <p>©️ 2024, Иван Смирнов</p>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  background: var(--primary);
  padding: 2rem;
}

a {
  color: var(--light-text);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.logo {
  font-size: 54px;
}

.logo:hover {
  text-decoration: none;
}

nav {
  display: flex;
  gap: 64px;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 270px;
  background: var(--primary);
  padding: 2rem;
}

footer p {
  font-size: 1.5rem;
  color: var(--light-text);
}

.links {
  display: flex;
  gap: 32px;
}
</style>
