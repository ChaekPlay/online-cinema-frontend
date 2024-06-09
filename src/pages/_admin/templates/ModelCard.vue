<template>
    <div class="model-card">
        <div class="card-title headline-md">
            <slot name="card-title"></slot>
        </div>
        <div class="card-content">
            <slot name="card-content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.model-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--primary-container-high);
    border: 1px solid var(--outline);
    border-radius: 1rem;
    padding: 1rem;
    cursor: pointer;
}
</style>