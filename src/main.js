import Vue from 'vue'
import './plugins/vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/store'
import routes from './routes.js'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
