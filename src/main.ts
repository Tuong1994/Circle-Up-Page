import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { iconList } from './libs/icon'
import vueQueryPluginOptions from './libs/vue-query'
import App from './App.vue'
import router from './router'
import './style/tailwind.css'
import './style/main.scss'

iconList()

const app = createApp(App)

app.component('fa', FontAwesomeIcon)

app.use(createPinia())

app.use(router)

app.use(VueQueryPlugin, vueQueryPluginOptions)

app.mount('#app')
