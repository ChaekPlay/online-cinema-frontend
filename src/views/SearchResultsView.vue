<template>
<section class="search-results view">
    <h1>Результаты поиска</h1>
    <div class="search-grid">
        <SearchResultComponent :content="exampleSearchResult"/>
        <SearchResultComponent :content="exampleSearchResult"/>
        <SearchResultComponent :content="exampleSearchResult"/>
        <SearchResultComponent :content="exampleSearchResult"/>
        <SearchResultComponent :content="exampleSearchResult"/>
        <SearchResultComponent :content="exampleSearchResult"/>
        <SearchResultComponent :content="exampleSearchResult"/>
        <SearchResultComponent :content="exampleSearchResult"/>
    </div>
</section>
</template>

<script setup lang="ts">
import SearchResult from '@/models/SearchResult';
import SearchResultComponent from '@/components/SearchResultComponent.vue';
const exampleSearchResult = new SearchResult({
    title: 'Harry Potter and the Philosopher\'s Stone',
    year: 2001,
    rating: 9.3,
    posterURI: 'https://placehold.it/300x300',  
    shortDescription: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling and is the first novel in the Harry Potter series.',
    genre: 'fantasy',
}
);
</script>
<style scoped>
.search-results {
    margin: 3rem auto;
}
.search-results h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
}
.search-grid {
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 16px;
}
</style>