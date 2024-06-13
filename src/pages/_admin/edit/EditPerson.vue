<template>
    <div class="edit-actor view">
        <EditModel :set-api="updateActor" :delete-api="removeActor" :id="actor_id" :create-api="createActor">
            <template #model-edit>
                <div class="input-field">
                    <label for="name">Имя</label>
                    <input class="txt-body-lg" type="text" name="name" id="name" v-model="person.name">
                </div>
                <div class="input-field">
                    <label for="birthdate">Дата рождения</label>
                    <div class="input-group">
                        <input type="number" name="birthDay" id="birthDay" v-model="current_birthdate.day">
                        <input type="number" name="birthMonth" id="birthMonth" v-model="current_birthdate.month">
                        <input type="number" name="birthYear" id="birthYear" v-model="current_birthdate.year">
                    </div>
                </div>
                <div class="input-field">
                    <label for="information">Информация</label>
                    <textarea class="txt-body-lg" name="information" id="information" cols="30" rows="10"
                        v-model="person.information"></textarea>
                </div>
                <div class="input-field">
                    <label for="imageURL">Изображение</label>
                    <p>Текущее изображение: <img width="200" height="200" :src="person.actorImageURL ?? ''"
                            alt="изображение"></p>
                    <input type="file" @change="onFileChange" name="imageURL" id="imageURL">
                </div>
            </template>
        </EditModel>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import EditModel from '../templates/EditModel.vue';
import Actor from '@/models/Actor';
import { onMounted, ref } from 'vue';
import { convertActorInfo, getActorInfo } from '@/api/get/get_actor_info';
import { getImageURL, uploadFile } from '@/api/post/upload_file';
import { postActor } from '@/api/post/create_actor';
import { putActor } from '@/api/put/put_actor';
import { deleteActor } from '@/api/delete/delete_actor';
import { postDirector } from '@/api/post/post_director';
import { deleteDirector } from '@/api/delete/delete_director';
import { putDirector } from '@/api/put/put_director';
import { getDirectorInfo } from '@/api/get/get_director_info';

let actor_id = router.currentRoute.value.params.id as string;

onMounted(async () => {
    getPerson();
})

async function getPerson() {
    let res = { data: null, error: null }
    try {
        if (person_type == "director") {
            res = await getDirectorInfo(actor_id);
            person.value = convertActorInfo(res.data);
        }
        else {
            res = await getActorInfo(actor_id);
            person.value = convertActorInfo(res.data);
        }
        current_birthdate.value = {
            year: person.value.birthdate.getFullYear(),
            month: person.value.birthdate.getMonth() + 1,
            day: person.value.birthdate.getDate()
        }
    }
    catch {
        console.log(res.error);
    }
}

let person = ref(
    new Actor({
        id: 0,
        name: "",
        birthdate: new Date(),
        information: ""
    })
)

let current_birthdate = ref({
    year: 0,
    month: 0,
    day: 0
})
let needs_upload = ref(false)
let current_file = ref(new File([], ""));
let person_type = router.currentRoute.value.params.person as string;

function onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file.size > 1048576) {
        alert("Файл слишком большой, размер не должен превышать 1 МБ");
        event.target.value = "";
        return;
    }
    current_file.value = file;
    needs_upload.value = true;
}

async function uploadImage() {
    if (!needs_upload.value) return true;
    if (!current_file.value) return false;
    let res = await uploadFile(current_file.value);
    person.value.actorImageURL = getImageURL(res.data);
    return true;
}
async function createActor() {
    if (await uploadImage()) {
        person.value.birthdate = new Date(current_birthdate.value.year, current_birthdate.value.month - 1, current_birthdate.value.day);
        let res = { data: null, error: null }
        try {
            if (person_type == "director")
                await postDirector(person.value);
            else
                await postActor(person.value);
            router.replace('/admin/models');
        }
        catch {
            console.log(res.error);
        }
    }
}

async function removeActor() {
    if (!confirm(`Вы уверены, что хотите удалить ${person_type == "director" ? "режиссера" : "актера"} ?`)) return;
    if (person_type == "director")
        await deleteDirector(actor_id);
    else
        await deleteActor(actor_id);
    router.replace('/admin/models');
}

async function updateActor() {
    if (await uploadImage()) {
        person.value.birthdate = new Date(current_birthdate.value.year, current_birthdate.value.month - 1, current_birthdate.value.day);
        let res = { data: null, error: null }
        try {
            if (person_type == "director")
                await putDirector(person.value);
            else
                await putActor(person.value);
            router.replace('/admin/models');
        }
        catch {
            console.log(res.error);
        }
    }
}
</script>

<style scoped></style>