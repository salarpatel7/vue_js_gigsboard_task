import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import '@fortawesome/fontawesome-free/css/all.css';
import draggable from 'vue-draggable-next'

const app = createApp(App)
app.use(draggable)
app.mount('#app')
