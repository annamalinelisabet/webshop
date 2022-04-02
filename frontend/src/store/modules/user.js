import axios from '@/axios'

export default {
    state: {
        userToken: null,
        loggedIn: false,
    },
    getters: {
        loggedIn: state => state.loggedIn,
        userId: state => {
            if(state.loggedIn) {
                let id = localStorage.getItem('userId')
                return id
            }
        }
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
            } 
            else {
                state.userToken = null
                state.loggedIn = false
            }
        },   
    },
    actions: {
        registerNewUserAndLogin: async ({commit}, user) => {
            const res = await axios.post('users/register', user)
            if(res.status === 201) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.user._id)
                const token = res.data.token
                commit('NEW_USER', token)
            }
        },
        login: async ({commit}, user) => {
            const res = await axios.post('users/login', user)
            if(res.status === 200) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.user._id)
                const token = res.data.token
                commit('SET_USER', token)
            }
        },
        logout: ({commit}) => {
            localStorage.clear()
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