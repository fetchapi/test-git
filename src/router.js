import Vue from 'vue'

import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import DefaultLayout from './components/DefaultLayout'

Vue.use(VueRouter)

import store from './store'

const router = new VueRouter({
    routes: [
      // dynamic segments start with a colon
      {
        path: '/',
        component: DefaultLayout,
        children: [
          { 
            path: '', 
            component: Home,
            name: 'home-page',
            beforeEnter: (to, from, next) => {
              // console.log(store.state.user)
              // if (store.state.user?.userId) {
                next()
              // } else next({name: 'login-page'})
            },
            meta: {
              
            }
          },
          { 
            path: 'about', 
            component: About,
            name: 'about-page' 
          },
          {
            path: 'login',
            component: Login,
            name: 'login-page',
            beforeEnter: (to, from, next) => {
              console.log("before Enter", to)
              if (store.state.user?.userId) {
                next(false)
              } else next()
            },
            afterEnter: (to, from, next) => {
              console.log("after Enter")
            
              next()
            },
          }
        ]
      }
    ]
  })
  
  export default router