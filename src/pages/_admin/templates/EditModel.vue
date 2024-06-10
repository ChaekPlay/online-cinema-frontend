<template>
    <div class="view-models view">
        <h1 class="display-lg">Изменить объект</h1>
        <form method="post" @submit.prevent="props.setApi">
            <slot name="model-edit"></slot>
            <div class="action-bar">
                <button class="btn btn-primary" type="submit">Применить</button>
                <button class="btn btn-danger" @click.prevent="props.deleteApi">Удалить</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string
    setApi: () => any
    deleteApi: () => any
}>()
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 2rem;
}

.action-bar {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}
</style>