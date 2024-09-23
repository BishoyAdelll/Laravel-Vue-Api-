import './assets/main.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue'
import  './axios.js'
import {useAuthStore} from "./stores/auth.js";


const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(axios)

const {attempt} =useAuthStore();
attempt(localStorage.getItem('token')).then(()=>{
    app.mount('#app')
})
