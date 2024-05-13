<template>
    <div class="actor-card">
        <img src="https://placehold.it/200x300" alt="фото">
        <div class="actor-description">
            <h4 class="txt-body-lg">Имя</h4>
            <p class="txt-body-md">Роль</p>
        </div>
    </div>
</template>
<style scoped>
.actor-card {
    width: 200px;
    display: flex;
    flex-direction: column;
    background: var(--primary-container);
    border: 2px solid var(--outline );
    border-radius: 1rem;
    overflow: hidden;
    flex: 0 0 auto;
    scroll-snap-align: start;
}
.actor-card img {
    object-fit:contain;
}
.actor-description {
    padding: 1rem;
}
</style>
<script setup lang="ts">
import ActorSummary from '@/models/ActorSummary';

defineProps({
    actor: ActorSummary
});
</script>