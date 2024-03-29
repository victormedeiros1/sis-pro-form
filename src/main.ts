import { createApp } from 'vue';

import "./styles/_global.scss";
import 'primevue/resources/themes/aura-light-green/theme.css'

import PrimeVue from 'primevue/config';
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue).mount('#app');