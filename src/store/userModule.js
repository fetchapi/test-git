import axios from "axios"
import router from '../router'

const userModule = {
    namespaced: true,
    state: {
        fullName: '',
        email: '',
        userId: '',
    },
    mutations: {
        addTodo(state, payload) {
            console.log(state, payload)
        },
        setUser(state, {fullName, email, userId}) {  
            state.fullName = fullName
            state.email = email
            state.userId = userId
        }
    },
    actions: {
        async login({commit}, data) {
            commit('status/setLoading', true, {root: true})
            try {
                await axios.post('https://reqres.in/api/login', data)
         
                const user = {
                    fullName: 'Ngo Huu Nhan',
                    email: data.username,
                    userId: 'USER00232'
                }
                commit('setUser', user)

                commit('status/setError', {
                    error: false,
                    message: ''
                }, {root: true})

                router.push({name: 'home-page'})
              
            } catch (error) {
                commit('status/setError', {
                    error: true,
                    message: error.response.data.error
                }, {root: true})
            } 
            finally {
                commit('status/setLoading', false, {root: true})
            }
        }
    }
}

export default userModule