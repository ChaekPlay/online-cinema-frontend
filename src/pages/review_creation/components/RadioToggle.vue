<template>
    <div class="radio-toggle">
        <input type="radio" :name="groupName" :id="id"> <label :for="id">{{ displayText }}</label>
    </div>
</template>
<style scoped>
.radio-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

input {
    accent-color: var(--primary);
}
</style>
<script setup lang="ts">
defineProps<{
    id: string,
    groupName: string,
    value: string
    displayText: string,
}>()
</script>
