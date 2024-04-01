import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue'

import "./styles/_global.scss";
import 'primevue/resources/themes/aura-light-indigo/theme.css'
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import InputText from 'primevue/inputtext';

const app = createApp(App);
app.use(PrimeVue);

app.component('InputText', InputText)

app.mount('#app')