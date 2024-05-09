<script setup lang="ts">
</script>

<template>
  <main>
    <div class="search-bar">
      <input type="text" name="query" id="query" placeholder="Например, Гарри Поттер">
      <input type="submit" name="find" id="find" value="Найти">
    </div>
  </main>
</template>
<style scoped>
  main {
    display: grid;
    place-items: center;
    min-height: 75vh;
  }
  .search-bar {
    display: flex;
    width: clamp(600px, 75%, 1200px);
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
  input[type="submit"] {
    padding: 16px 32px;
    border-radius: 36px;
    border:none;
    background-color: var(--primary);
    color: var(--light-text);
    font-size: 45px;
  }
  input[type="submit"]:hover {
    filter:brightness(110%);
    cursor: pointer;
  }
</style>
