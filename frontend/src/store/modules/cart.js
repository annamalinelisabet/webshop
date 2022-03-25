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
    //   CHANGE_QUANTITY: (state, { product, quantity }) => {
    //       let changedQuantity = state.cart
    //   }
      REMOVE_CART_ITEM: (state, id) => {
         state.cart = state.cart.filter(item => item.product._id !== id)         
      }
  },
  actions: {
      addToCart: ({commit}, { product, quantity }) => {
          commit('ADD_TO_CART', { product, quantity })
      },
      changeQuantity: ({commit}, { product, quantity }) => {
          commit('CHANGE_QUANTITY', { product, quantity })
      },
      removeCartItem: ({commit}, id) => {
          commit('REMOVE_CART_ITEM', id)
      }

  }
}