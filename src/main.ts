import { createApp } from 'vue'
import App from './App.vue'
// import './samples/node-api'
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from './views/Index.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    component: Index
  }]
})

const app = createApp(App);

app.use(router)
app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })