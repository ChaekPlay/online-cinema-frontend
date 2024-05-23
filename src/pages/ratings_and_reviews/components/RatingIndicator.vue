<template>
    <div class="indicator-container">
        <div class="rating-indicator">
        </div>
        <p class="txt-body-lg">{{displayText}}</p>
    </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';

    let props = defineProps<{
        displayText: string
        value: number
    }>();
    let percentage = ref(props.value+"%");
    console.log(percentage.value);
</script>
<style scoped>
    .indicator-container {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .rating-indicator {
        width: 25vw;
        height: 10px;
        border-radius: 16px;
        background: linear-gradient(90deg, var(--primary) 0 v-bind('percentage') , var(--primary-container-very-high) v-bind('percentage') 100%);
        transition: all 0.3s ease-in-out;
    }
</style>