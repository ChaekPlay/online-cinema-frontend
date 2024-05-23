<template>
    <div class="ratings-and-reviews view">
        <div class="ratings-and-reviews-header">
            <h2 class="display-lg">Оценки и отзывы</h2>
            <a @click.prevent="" class="title-md back-text link" @click="$router.back()">Вернуться к фильму</a>
        </div>
        <div class="rating">
            <div class="user-rating">
                <h3 class="headline-md">Поставить оценку:</h3>
                <div class="user-rating-indicator">
                    <input class="range-indicator" type="range" name="rating" id="rating" max="10" min="1" v-model="userRating" step="1">
                    <p class="user-rating-indicator-value headline-lg">{{ userRating }}</p>
                </div>
                <button class="btn btn-primary label-lg">Применить</button>
            </div>
            <div class="overall-rating">
                <h3 class="headline-sm">Общая оценка:</h3>
                <p class="display-lg">9.1</p>
            </div>
            <div class="rating-stats">
                <h3 class="headline-sm">Статистика</h3>
                <p>Всего оценок: 50</p>
                <div class="rating-board">
                    <RatingIndicator :display-text="'10'" :value="14"/>
                    <RatingIndicator :display-text="'9'" :value="24"/>
                    <RatingIndicator :display-text="'8'" :value="12"/>
                    <RatingIndicator :display-text="'7'" :value="12"/>
                    <RatingIndicator :display-text="'6'" :value="12"/>
                    <RatingIndicator :display-text="'5'" :value="14"/>
                    <RatingIndicator :display-text="'4'" :value="8"/>
                    <RatingIndicator :display-text="'3'" :value="4"/>
                    <RatingIndicator :display-text="'2'" :value="4"/>
                    <RatingIndicator :display-text="'1'" :value="4"/>
                </div>
            </div>
        </div>
        <div class="reviews">
            <div class="review-header">
                <h3 class="headline-md">Рецензии</h3>
                <button class="btn btn-glass btn-icon-text label-lg" @click="$router.push('create-review')"><img class="icon-sm" src="@/static/icons/plus.svg">Написать свою рецензию</button>
            </div>
            <div class="review-list">
                <ReviewCard v-for="review in exampleReviews" :key="review.id" :content="review"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import RatingIndicator from './components/RatingIndicator.vue';
import ReviewCard from './components/ReviewCard.vue';
import Review from '@/models/Review';
import { ReviewType } from '@/models/ReviewType';

let userRating = ref(5);

let exampleReviews: Review[] = [
    new Review({
        id: 1,
        title: "Лучший фильм",
        text: "Самый лучший фильм в мире",
        type: ReviewType.POSITIVE,
    }),
    new Review({
        id: 2,
        title: "Нормальный фильм",
        text: "Самый нормальный фильм в мире",
        type: ReviewType.NEUTRAL,
    }),
    new Review({
        id: 3,
        title: "Плохой фильм",
        text: "Самый плохой фильм в мире",
        type: ReviewType.NEGATIVE,
    }),
]


</script>
<style scoped>
.back-text {
    color: var(--primary);
}
.ratings-and-reviews {
     margin: 2rem 3rem;
     display: flex;
     flex-direction: column;
     gap: 4rem;
}
.ratings-and-reviews-header {   
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: baseline;
}
.rating {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
}
.user-rating {
    display: flex;
    flex-direction: column;
    gap:1rem;
    align-items: start;
}
.user-rating-indicator {
    display: flex;
    gap: 2rem;
    align-items: center;
}
.user-rating-indicator-value {
    width: 40px;
}
.overall-rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
}
.reviews {
    display:flex;
    flex-direction: column;
    gap: 2rem;
}
.review-header {
    display: flex;
    gap: 2rem;
    align-items: center ;
}
.review-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}
.range-indicator {
    appearance: none;
    width: 25vw;
    height: 15px;
    border-radius: 5px;
    background: var(--primary-container-very-high);
}
.range-indicator::-webkit-slider-thumb  {
    appearance: none;
    height: 50px;
    width: 15px;
    border: 2px solid var(--background);
    border-radius: 8px;
    background: var(--primary);
    cursor: ew-resize;
    transition: background .3s ease-in-out;
  }
  
  .range-indicator::-moz-range-thumb {
    appearance: none;
    height: 50px;
    width: 15px;
    border: 2px solid var(--background);
    border-radius: 8px;
    background: var(--primary);
    cursor: ew-resize;
    transition: background .3s ease-in-out;
  }

  .range-indicator::-webkit-slider-runnable-track  {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
</style>