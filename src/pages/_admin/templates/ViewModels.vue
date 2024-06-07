<template>
    <div class="view-models view">
        <h1 class="display-lg">{{ title }}</h1>
        <div class="model-search">
            <slot name="model-search"></slot>
        </div>
        <div class="models-switch">
            <slot name="model-switch"></slot>
        </div>
        <div class="model-grid">
            <slot name="model-grid"></slot>
        </div>
        <div class="model-pagination">
            <slot name="model-pagination"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string
}>()
</script>

<style scoped>
.model-switch {
    display: flex;
    gap: 1rem;
}

.model-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}
</style>