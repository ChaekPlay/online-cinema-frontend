<template>
    <div class="view-models view">
        <h1 class="display-lg">{{ title }}</h1>
        <div class="model-search">
            <slot name="model-search"></slot>
        </div>
        <div class="models-switch">
            <slot name="model-switch"></slot>
        </div>

        <slot name="model-grid"></slot>

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
.view-models {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.model-search {
    display: flex;
    gap: 1rem;
}

.models-switch {
    display: flex;
    gap: 1rem;
}

.model-switch {
    display: flex;
    gap: 1rem;
}
</style>