import './assets/main.css'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

watch(
  pinia.state,
  (state) => {
    localStorage.setItem('watched', JSON.stringify(state.watchedList))
  },
  { deep: true }
)
