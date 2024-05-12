<template>
<div class="search-bar">
    <form method="get" @submit.prevent="search">
        <input type="text" name="query" id="query" placeholder="Например, Гарри Поттер" v-model="searchQuery">
        <button type="submit" name="find" id="find" >Найти</button>
    </form>
</div>
</template>
<style scoped>
    .search-bar {
        width: clamp(600px, 75%, 1200px);
    }
    .search-bar form {
    display: flex;
    justify-content: space-around;
    gap: 16px;
  }
  input[type="text"] {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 32px;
    color: var(--text);
    border-radius: 16px;
    border:none;
    background: var(--primary-container-high);
  }
  input[type="text"]:focus {
    outline-color: var(--primary);
  }
  button[type="submit"] {
    padding: 16px 32px;
    border-radius: 36px;
    border:none;
    background-color: var(--primary);
    color: var(--light-text);
    font-size: 45px;
  }
  button[type="submit"]:hover {
    filter:brightness(110%);
    cursor: pointer;
  }
</style>
<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

    const searchQuery = ref("");
    function search() {
        console.log("i am at search results");
        router.push({path:"/search", query: {query: searchQuery.value}});
    }
</script>