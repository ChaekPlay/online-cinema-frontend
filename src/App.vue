<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" class="logo" href="">Фильмотека</RouterLink>
    <nav>
      <RouterLink to="/" class="headline-md">Главная</RouterLink>
      <RouterLink to="/about" class="headline-md">Список просмотренного</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer>
    <section class="links">
      <a href="#"><img src="https://placehold.it/48x48" alt=""></a>
      <a href="#"><img src="https://placehold.it/48x48" alt=""></a>
      <a href="#"><img src="https://placehold.it/48x48" alt=""></a>
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
