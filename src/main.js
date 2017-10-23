import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import App from './App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:routerConfig
});

new Vue({
    router:router,
    el: '#app',
    render: h => h(App)
})
