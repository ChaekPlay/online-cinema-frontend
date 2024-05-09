<template>
<div class="search-result-card">
    <img :src="content.posterURI" alt="Постер">
    <div class="search-result-card-content">
        <div class="search-result-card-content-header">
            <div class="search-result-card-content-header-info">
                <h3>{{content.title}}</h3>
                <p>Год выхода: {{content.year}}</p>
            </div>
            <span class="search-result-card-rating">{{content.rating}}</span>
        </div>
        <p>{{ content.shortDescription }}
        </p>
    </div>
</div>
</template>

<script setup lang="ts">
import SearchResult from '@/models/SearchResult';

defineProps<{
    'content': SearchResult
}>()
</script>
<style scoped>
.search-result-card {
    margin-bottom: 16px;
    background: var(--primary-container-high);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--outline);   
}
.search-result-card img {
    width: 100%;
}
.search-result-card-rating {
    font-size: 2rem;
    color: limegreen;
}
.search-result-card p {
    color: var(--container-text);
}
.search-result-card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;  
}
.search-result-card-content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.search-result-card-content-header-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.search-result-card-content-header-info h3 {
    font-size: 2rem;
}

</style>