<script setup>
import {useAuthStore} from "../stores/auth.js";
import {storeToRefs} from "pinia";

const {authenticated,getUser:user}=storeToRefs(useAuthStore());
</script>

<template>
    <div class="text-center">
        <div v-if="authenticated">
            <h1>{{user.name}}</h1>
            <p>{{user.email}}</p>
        </div>
        <div v-else> Home page </div>
    </div>
</template>
