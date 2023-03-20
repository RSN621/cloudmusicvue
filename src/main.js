import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios.js'
import VueAxios from 'vue-cli-plugin-axios'



const app=createApp(App)
//app.mount('#app')
app.use(store).use(VueAxios,axios).use(router).mount('#app')
app.config.globalProperties.$axios=axios
//createApp(App).use(VueAxios,axios)
//createApp(App).use(store).use(router).mount('#app')
