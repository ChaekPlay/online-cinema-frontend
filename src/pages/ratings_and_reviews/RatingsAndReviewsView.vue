<template>
    <div class="ratings-and-reviews view">
        <div class="ratings-and-reviews-header">
            <h2 class="display-lg">Оценки и отзывы</h2>
            <a @click.prevent="" class="title-md back-text link">Вернуться к фильму</a>
        </div>
        <div class="rating">
            <div class="user-rating">
                <h3 class="headline-md">Поставить оценку:</h3>
                <input type="range" name="rating" id="rating">
                <button class="btn btn-primary label-lg">Применить</button>
            </div>
            <div class="overall-rating">
                <h3 class="headline-sm">Общая оценка:</h3>
                <p class="display-lg">9.1</p>
            </div>
            <div class="rating-stats">
                <h3 class="headline-sm">Статистика</h3>
                <!-- here goes indicators -->
            </div>
        </div>
        <div class="reviews">
            <div class="review-header">
                <h3 class="headline-md">Рецензии</h3>
                <button class="btn btn-glass btn-icon-text label-lg"><img class="icon-sm" src="@/static/icons/plus.svg">Написать свою рецензию</button>
            </div>
            <div class="review-list">
                <!-- here goes review cards -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

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
.user-rating input {
    width:100%;
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
</style>