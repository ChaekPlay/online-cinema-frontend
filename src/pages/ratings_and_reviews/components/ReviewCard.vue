<template>
    <div class="review-card" :style="{'background': reviewTypeDictionary[content.type]}">
        <h3 class="headline-lg">{{ content.title }}</h3>
        <hr>
        <p class="txt-body-lg">{{ content.text }}</p>
    </div>
</template>
<style scoped>
.review-card {
    padding: 1rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0px 1px 2px rgba(0,0,0,30%), 0 1px 3px 1px rgba(0,0,0,15%);
}
.review-card hr {
    border:none;
    border: 1px solid var(--outline);
}
</style>
<script setup lang="ts">
import type Review from '@/models/Review';
import { ReviewType } from '@/models/ReviewType';
import { ref } from 'vue';

defineProps<{
    content: Review
}>()

let reviewTypeDictionary = ref({
    [ReviewType.POSITIVE]: "var(--positive-review)",
    [ReviewType.NEUTRAL]: "var(--neutral-review)",
    [ReviewType.NEGATIVE]: "var(--negative-review)",
})
</script>
