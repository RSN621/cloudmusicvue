import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-cli-plugin-axios'
import axios from './plugins/axios'



const app=createApp(App)
app.use(VueAxios,axios)
app
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
app.config.globalProperties.$axios=axios
