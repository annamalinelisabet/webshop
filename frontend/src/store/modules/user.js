import axios from '@/axios'

export default {
    state: {
        userToken: null,
        loggedIn: false,
    },
    getters: {
        loggedIn: state => state.loggedIn,
    },
    mutations: {
        NEW_USER: (state, token) => {
            if(token){
                state.userToken = token
                state.loggedIn = true
            } 
        },
        SET_USER: (state, token) => {
            if(token){
                state.userToken = token
                state.loggedIn = true
            } else {
                state.loggedIn = false
                state.userToken = null
            }
        }   
    },
    actions: {
        registerNewUserAndLogin: async ({commit}, user) => {
            const res = await axios.post('users/register', user)
            if(res.status === 201) {
                localStorage.setItem('token', res.data.token)
                commit('NEW_USER', res.data.token)
            }
        },
        login: async ({commit}, user) => {
            const res = await axios.post('users/login', user)
            if(res.status === 200) {
                localStorage.setItem('token', res.data.token)
                commit('SET_USER', res.data.token)
            }
        },
        logout: ({commit}) => {
            localStorage.removeItem('token')
            commit('SET_USER', null)
        },
        checkUser: ({commit}) => {
            let token = localStorage.getItem('token')
            if(token) {
                commit('SET_USER', token)
            }
        }
    }
  }