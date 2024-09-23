<script setup>
import {RouterLink} from "vue-router";
import {useAuthStore} from "../stores/auth.js";
import {storeToRefs} from "pinia";
import router from "../router/index.js";
const {logout} =useAuthStore()
const {authenticated} = storeToRefs(useAuthStore())

const handleLogout =() =>{
    logout().then(()=>{
        router.push({name:'login'})
    })
}
</script>

<template>
<header class="bg-white h-16 flex items-center border-b-2 border-gray-300 shadow">
    <nav class="container mx-auto flex item-center justify-between text-lg">
        <router-link to="/" class="flex item-center font-medium text-gray-900">
            Laravel Vue APi
        </router-link>
        <div class="flex item-center justify-center space-x-6 text-gray-600">
            <router-link to="/" class="hover:text-gray-900">Home </router-link>
            <template v-if="authenticated">
                <router-link to="/dashboard" class="hover:text-gray-900">Dashboard </router-link>
                <button @click="handleLogout" class="hover:text-gray-900">Log Out</button>
            </template>
            <template v-else>

            <router-link to="/login" class="hover:text-gray-900">Login </router-link>
            <router-link to="/register" class="hover:text-gray-900">Register </router-link>
            </template>
        </div>
    </nav>
</header>
</template>

<style scoped>

</style>
