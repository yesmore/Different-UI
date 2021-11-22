import { createApp } from 'vue'
import App from './App.vue'
import DifferentUi from '~/index'

const app = createApp(App)
app.use(DifferentUi)
app.mount('#app')
