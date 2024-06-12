import './assets/main.css'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import { useUserStore } from './store/UserStore'
import pinia from './store/CreatePinia'

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
watch(
  pinia.state,
  (state) => {
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  { deep: true }
)
