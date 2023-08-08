import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todoModule from './todoModule'
import userModule from './userModule'
import statusModule from './statusModule'

const store = new Vuex.Store({
    modules: {
        todo: todoModule,
        user: userModule,
        status: statusModule
    }
})

export default store