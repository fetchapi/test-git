import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'

import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

import router from './router'

import store from './store'

router.beforeEach((to, from, next) => {
  // store.commit('status/setLoading', true)
  console.log("before Each")
  // console.log(to)
  next()
})

router.afterEach((to, ) => {
  console.log("after Each")
  console.log(to)
})


router.beforeResolve((to, from, next) => {
    // store.commit('status/setLoading', false)
    // next()
  
  console.log("before Resolve")
  // console.log(to)
  next()
  
})

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize('en', en)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
