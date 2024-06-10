<template>
    <div class="select-picker">
        <div class="input-data">
            <div class="input-field">
                <label>{{ displayText }}</label>
                <select class="txt-body-lg" name="select" id="select" v-model="controller">
                    <option class="txt-body-lg" :value="null" disabled hidden>{{ placeholder }}</option>
                    <option class="txt-body-lg" v-for="option in available_options" :key="option.id" :value="option">{{
                        option.name }}
                    </option>
                </select>
            </div>
            <button class="btn btn-primary" @click.prevent="addToList">Ок</button>
        </div>
        <div class="tag-list">
            <div class="tag" v-for="tag in selected_options" :key="tag.id">
                <p class="txt-body-sm tag">{{ tag.name }}<span><img class="icon-sm" src="@/static/icons/cross-light.svg"
                            @click.prevent="removeFromList(tag)"></span></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type Actor from '@/models/Actor';
import type Genre from '@/models/Genre';
import { ref } from 'vue';

let controller = ref(null as any)
let selected_options = ref([] as (Genre[] | Actor[]));
const props = defineProps<{
    displayText: string,
    placeholder?: string,
    options: Genre[] | Actor[]
    selectedOptions: Genre[] | Actor[]
}>()
let available_options = ref([] as (Genre[] | Actor[]));
available_options.value = props.options;
selected_options.value = props.selectedOptions;


const emit = defineEmits(["updateList"])
function addToList() {
    if (controller.value == null) return;
    selected_options.value.push(controller.value);
    available_options.value.splice(available_options.value.indexOf(controller.value), 1);
    console.log(selected_options.value);
    console.log(available_options.value);
    controller.value = null;
    emit("updateList", selected_options.value);
}
function removeFromList(tag: any) {
    selected_options.value.splice(selected_options.value.indexOf(tag), 1);
    available_options.value.push(tag);
    emit("updateList", selected_options.value);
}
</script>

<style scoped>
.select-picker {
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

select {
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