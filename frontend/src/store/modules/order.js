import axios from '@/axios'

export default {
    state: {
        orders: []
    },
    getters: {        
        orders: state => state.orders,
    },
    mutations: {
        SET_ORDER: (state, order) => {   
            state.orders.push(order)   
            
            // ??? BEHÖVS DET GÖRAS NÅT HÄR???
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
                commit('SET_ORDER', products)
            }
            
        }
    }
}