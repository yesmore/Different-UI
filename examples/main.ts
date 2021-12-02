import { createApp } from 'vue'
import App from './App.vue'

import DifferentUi from '~/index'
import '~/theme/index.css'
import '~/theme/src/Icon/iconfont.css'

const app = createApp(App)
app.use(DifferentUi)
app.mount('#app')
