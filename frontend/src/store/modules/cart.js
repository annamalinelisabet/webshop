export default {
  state: {
      cart: []
  },
  getters: {
      cart: state => state.cart,
      cartCounter: state => {
          let items = 0
          state.cart.forEach(item => {
              items += item.quantity
          })
          return items
      },
      totalPrice: state => {
          let total = 0
          if(state.cart.length) {
              state.cart.forEach(item => {
                  total += item.product.price * item.quantity
              })
          }
          return total
      }
  },
  mutations: {
      ADD_TO_CART: (state, { product, quantity }) => {
          let exist = state.cart.find(item => item.product._id === product._id)
          if(exist) {
              exist.quantity += quantity
              return
          }
          state.cart.push({ product, quantity })
      },
      ADD_QUANTITY: (state, id) => {
           let cartItem = state.cart.find(item => item.product._id === id)
           cartItem.quantity++
      },
      SUB_QUANTITY: (state, id) => {
           let cartItem = state.cart.find(item => item.product._id === id)
           if(cartItem.quantity > 1){
               cartItem.quantity--
           } else {
            state.cart = state.cart.filter(item => item.product._id !== id)
           }
      },
      REMOVE_CART_ITEM: (state, id) => {
         state.cart = state.cart.filter(item => item.product._id !== id)         
      },
      SET_EMPTY_CART: state => {
          state.cart = []
      }
  },
  actions: {
      addToCart: ({commit}, { product, quantity }) => {
          commit('ADD_TO_CART', { product, quantity })
      },
      addQuantity: ({commit}, id) => {
          commit('ADD_QUANTITY', id)
      },
      subQuantity: ({commit}, id) => {
          commit('SUB_QUANTITY', id)
      },
      removeCartItem: ({commit}, id) => {
          commit('REMOVE_CART_ITEM', id)
      }, 
      removeAllCartItems: ({commit}) => {
          commit('SET_EMPTY_CART')
      }
  }
}