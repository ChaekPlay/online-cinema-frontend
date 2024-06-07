<template>
    <div class="service-paginator">
        <button class="service-paginator-page previous-page btn btn-primary title-md"
            :class="{ 'active': (modelValue === page_first) }" :disabled="modelValue === page_first"
            @click="updateValue(--localModelValue)">
            &larr;
        </button>

        <button v-for="(value, key) in items()" :key="key" class="service-paginator-page btn btn-primary title-md"
            :class="{ 'active': value.disabled }" :disabled="value.disabled" @click="updateValue(value.page)">
            {{ value.text }}
        </button>

        <button class="service-paginator-page next-page btn btn-primary title-md"
            :class="{ 'active': (modelValue === page_last) }" :disabled="modelValue === page_last"
            @click="updateValue(++localModelValue)">
            &rarr;
        </button>

    </div>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits, reactive } from 'vue';
const emit = defineEmits(['update:modelValue', 'change']);
let localModelValue = ref(1);
const props = defineProps<{
    page_first: number,
    page_last: number,
    modelValue: number,
}>()
const data = reactive({
    offset_pages: 2,
});
computed({
    get() {
        return localModelValue.value
    },
    set(newValue) {
        emit('update:modelValue', newValue)
    },
}
)
function updateValue(v: number) {
    localModelValue.value = v;
    emit('change', v);
    emit('update:modelValue', v);
}

function items() {
    let items_array = [];

    for (
        let i = props.page_first;
        i <= props.page_first + data.offset_pages && i <= props.page_last;
        i++
    ) {
        let data: any = {};

        data["text"] = "" + i;
        data["page"] = i;
        data["disabled"] = localModelValue.value === i;

        items_array.push(data);
    }

    for (
        let i = Math.max(
            localModelValue.value - data.offset_pages,
            props.page_first + data.offset_pages + 1
        );
        i <= Math.min(
            localModelValue.value + data.offset_pages,
            props.page_last - data.offset_pages - 1
        ) && i <= props.page_last;
        i++
    ) {
        let data: any = {};

        data["text"] = "" + i;
        data["page"] = i;
        data["disabled"] = localModelValue.value === i;

        items_array.push(data);
    }

    for (
        let i = Math.max(
            props.page_last - data.offset_pages,
            props.page_first + data.offset_pages + 1
        );
        i <= props.page_last;
        i++
    ) {
        let data: any = {};

        data["text"] = "" + i;
        data["page"] = i;
        data["disabled"] = localModelValue.value === i;

        items_array.push(data);
    }

    return items_array;
}

</script>
<style scoped>
.service-paginator {
    padding: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

button:hover {
    background: var(--primary-hover);
}

button:disabled {
    background: var(--primary-disabled);
}
</style>