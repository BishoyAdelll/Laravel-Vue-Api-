<script setup>
import {reactive} from "vue";
import {useAuthStore} from "../../stores/auth.js";
import {storeToRefs} from "pinia";
import router from "../../router/index.js";

const store = useAuthStore();
const {getErrors:errors} =storeToRefs(useAuthStore())

const form =reactive({
    email:'',
    password : ''
})

const handleLogin =() =>{
    store.login(form).then(()=>{
        router.push({name:'dashboard'})
    })
}
</script>

<template>
    <form @submit.prevent="handleLogin">
        {{getErrors}}
        <h1 class="text-gray-900 text-2xl font-medium text-center mb-10">login</h1>
        <div class="mb-3">
            <label for="email" class="leading-7 text-sm text-gray-700">Email</label>
             <input type="email" v-model="form.email" name="email" id="email" class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out online-none focus:border-indigo-300">
            <p v-if="errors.email" class="text-xs text-red-500">{{errors.email[0]}}</p>
        </div>
        <div class="mb-3">
            <label for="password" class="leading-7 text-sm text-gray-700">Password</label>
             <input type="password" v-model="form.password" name="password" id="password" class="w-full border border-gray-300 rounded text-gray-700 py-1 px-3 leading-8 ease-in-out online-none focus:border-indigo-300">
            <p v-if="errors.password" class="text-xs text-red-500">{{errors.password[0]}}</p>
        </div>
        <div class="pt-3">
            <button type="submit" class=" border-0  text-white bg-indigo-500 py-2 px-6 rounded text-lg w-full  hover:bg-indigo-600">Login</button>

        </div>
    </form>

</template>

<style scoped>

</style>
