import axios from '@/axios'

export default {
    state: {
        orders: []
    },
    getters: {        
        orders: state => state.orders,
    },
    mutations: {
        SET_ORDERS: (state, orders) => {   
            state.orders = orders                
        }
    },
    actions: {
        newOrder: async ({commit}, {products, totalPrice}) => {
            const token = localStorage.getItem('token')
            const res = await axios.post('orders', {
                products,
                totalPrice
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if(res.status === 201) {
                commit('SET_ORDERS')
            }
            
        },
        getUserOrders: async ({commit}, userId) => {
            const token = localStorage.getItem('token')
            const res = await axios.get('orders/' + userId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if(res.status === 200) {
                commit('SET_ORDERS', res.data)
            }
        }
    }
}