import Vue from 'vue'
import VueRouter from 'vue-router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Store from './store/index.js'
import routerConfig from './router.config'
import App from './App.vue'

// Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.use(Store);

const router = new VueRouter({
    mode:'history',
    routes:routerConfig
});

new Vue({
    router:router,
    store: Store,
    el: '#app',
    render: h => h(App)
})
