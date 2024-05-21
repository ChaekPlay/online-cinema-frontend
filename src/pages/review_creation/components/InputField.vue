<template>
    <div class="input-field">
        <label :for="id">{{ displayText }}</label><input class="txt-body-lg" :id="id" :type="type || 'text'"
            :placeholder="placeholder">
    </div>
</template>
<style scoped>
.input-field {
    display: flex;
    flex-direction: column;
}

.input-field input {
    padding: 1rem 1rem;
}
</style>
<script setup lang="ts">
defineProps<{
    id: string
    displayText: string
    type?: string
    placeholder?: string
}>()


</script>