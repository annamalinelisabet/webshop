<template>
  <div class="container">
    <div class="cart-wrapper" v-if="cart.length">   
      <button @click="back" class="btn absolute"><i class="fa-solid fa-arrow-left-long"></i></button>
        <h1>KUNDVAGN <span class="counter">( {{cartCounter}} )</span></h1>    
      <div class="cart-card-holder">
        <CartCard v-for="item in cart" :key="item.product._id" :item="item" /> 
      </div>
      <div class="cart-end">
        <div class="flex price">
          <h4>Totalt inkl. moms:</h4>
          <h4>{{ totalPrice }} kr</h4>
        </div>
        <div v-if="loggedIn">
          <button @click="handleOrder" class="btn btn-primary btn-w">BESTÄLL</button>
        </div>
        <div v-else class="flex">
          <p class="login-text">Du måste vara inloggad för att beställa</p>          
          <router-link to="/login"><button class="btn btn-primary btn-w btn-login">LOGGA IN</button></router-link>
        </div>
      </div>
    </div>
    <div class="empty" v-else>
      <p class="empty-text">Din kundvagn är tom</p>
      <router-link to="/"><button class="btn btn-primary btn-w">TILL ÖLEN</button></router-link>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      orderData: []
    }
  },
  components: { CartCard },
  computed: {
    ...mapGetters(['cart', 'totalPrice', 'cartCounter', 'loggedIn'])
  },
  methods: {
      ...mapActions(['newOrder']),
      back() {
        this.$router.go(-1)
      },
      handleOrder() {
    
       this.cart.forEach(item => {
          this.orderData.push({
            name:       item.product.name,
            productId:  item.product._id,
            price:      item.product.price, 
            quantity:   item.quantity
          })          
         
        });
      
        let products = this.orderData
        let totalPrice = this.totalPrice
        this.newOrder({products, totalPrice})
          .then(() => {
            // ! TÖM CART
            this.$router.push('/order')
          })
          .catch(() => {
            // ! PROVA EFTER tre timmar och se om den säger ifrån när token har gått ut, isåfalll gör ett sånt felmeddelande!
            console.log('det här gick inte så bra')
          })

      }
  }
}
</script>

<style scoped>
  .cart-wrapper {
    width: 100%;
    background: white;
    padding: 3rem 2rem;
    margin: 4rem auto;
    position: relative;
  }

  .counter {
    color: var(--secondary-color);
    font-size: 1.5rem;
  }

  .cart-card-holder {
    margin-block: 3rem;
  }

  .cart-end {
    width: 80%;
    margin: auto;
  }

  .price {
    margin-bottom: 1.5rem;
  }

  .login-text {
    flex: 3;
  }

  .btn-login {
    flex: 2;
  }

  .empty-text {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  .empty {
    margin-top: 5rem;
  }


</style>