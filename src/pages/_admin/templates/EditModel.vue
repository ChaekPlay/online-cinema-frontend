<template>
    <div class="view-models view">
        <h1 class="display-lg">Изменить объект</h1>
        <slot name="model-edit"></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    objectid: string
    objectGetAPI: (id: string) => any
    objectSetAPI: (id: string, data: any) => any
    objectDeleteAPI: (id: string) => any
}>()

</script>

<style scoped></style>