import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store/index.js'
import routerConfig from './router.config'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(Store);

const router = new VueRouter({
    routes:routerConfig
});

new Vue({
    router:router,
    store: Store,
    el: '#app',
    render: h => h(App)
})
