<template>
    <div class="view-models view">
        <h1 v-if="props.id" class="display-lg">Изменить объект</h1>
        <h1 v-else class="display-lg">Создать объект</h1>
        <form method="post" @submit.prevent="makeAction">
            <slot name="model-edit"></slot>
            <div class="action-bar">
                <button v-if="props.id" class="btn btn-primary" type="submit">Применить</button>
                <button v-else class="btn btn-primary" type="submit">Создать</button>
                <button v-if="props.id" class="btn btn-danger" @click.prevent="props.deleteApi">Удалить</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string | undefined
    setApi: () => any
    deleteApi: () => any
    createApi: () => any
}>()

function makeAction() {
    if (props.id) {
        props.setApi()
    } else {
        props.createApi()
    }
}
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