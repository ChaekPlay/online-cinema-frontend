<template>
    <div class="review-creation view">
        <h1>Создание рецензии</h1>
        <form @submit.prevent="sendReview">
            <div class="review-type">
                <p class="review-type-text title-lg">Тип рецензии</p>
                <div class="review-type-radio">
                    <RadioToggle :id="'type1'" :display-text="'Положительная'" :group-name="'type'"
                        :value="ReviewType.POSITIVE" />
                    <RadioToggle :id="'type2'" :display-text="'Нейтральная'" :group-name="'type'"
                        :value="ReviewType.NEUTRAL" />
                    <RadioToggle :id="'type3'" :display-text="'Отрицательная'" :group-name="'type'"
                        :value="ReviewType.NEGATIVE" />
                </div>
            </div>
            <div class="text-fields">
                <InputField :id="'name'" :placeholder="'Иван Иванов'" :type="'text'" :display-text="'Имя'" />
                <InputField :id="'email'" :placeholder="'example@example.com'" :type="'email'"
                    :display-text="'E-mail'" />
                <InputField :id="'title'" :placeholder="'Заголовок рецензии'" :type="'text'"
                    :display-text="'Заголовок'" />
            </div>
            <div class="review-text">
                <label for="description">Текст рецензии</label>
                <textarea class="font-family-override txt-body-lg" name="description" id="description"
                    placeholder="Введите текст рецензии"></textarea>
            </div>
            <div class="action-bar">
                <button class="btn btn-glass" @click.prevent="$router.back()">Назад</button>
                <button class="btn btn-primary" type="submit">Отправить</button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ReviewType } from '@/models/ReviewType';
import InputField from './components/InputField.vue';
import RadioToggle from './components/RadioToggle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function sendReview() {
    // post query
    // if query is successful
    // go to review success page
    router.push('review-success');
}
</script>
<style scoped>
.review-creation {
    max-width: 1200px;
    width: 100%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.review-type {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.review-type-radio {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.text-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.review-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

textarea {
    width: 100%;
    height: 10rem;
    padding: 1rem;
    resize: none;
}

.action-bar {
    display: flex;
    justify-content: space-between;
}
</style>