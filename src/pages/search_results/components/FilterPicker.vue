<template>
    <div class="filter-picker">
        <div class="input-data">
            <div class="input-field">
                <label>{{ displayText }}</label>
                <input class="txt-body-lg" type="text" name="filter" :placeholder="placeholder ?? 'Введите текст'"
                    id="{{ displayText }}" v-model="controller">
            </div>
            <button class="btn btn-primary" @click="addToList">Ок</button>
        </div>
        <div class="tag-list">
            <div class="tag" v-for="tag in localList" :key="tag">
                <p class="txt-body-sm tag">{{ tag }}<span><img class="icon-sm" src="@/static/icons/cross-light.svg"
                            @click="removeFromList(tag)"></span></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let controller = ref("")
let localList = ref([] as string[]);
defineProps<{
    displayText: string,
    placeholder?: string
}>()
const emit = defineEmits(["updateList"])
function addToList() {
    if (controller.value.length > 0 && !localList.value.includes(controller.value)) {
        localList.value.push(controller.value);
        emit("updateList", localList.value);
        controller.value = "";
    }
}
function removeFromList(tag: string) {
    localList.value.splice(localList.value.indexOf(tag), 1);
    emit("updateList", localList.value);
}
</script>

<style scoped>
.filter-picker {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.input-data {
    display: flex;
    gap: 0.5rem;
    align-items: end;
}

.input-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

input {
    padding: 1rem 1rem;
}

.tag-list {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: var(--primary);
    color: var(--light-text);
    border-radius: 1rem;
}

.tag span {
    padding: 0.25rem;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tag span:hover {
    background: var(--primary-hover);
}
</style>