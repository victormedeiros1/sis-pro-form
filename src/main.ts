import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import { router } from './router'

import 'primevue/resources/themes/aura-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import '@/styles/main.css'

import InputText from 'primevue/inputtext'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)

app.component('InputText', InputText)

app.mount('#app')
