<template>
  <div class="cart-card flex">
      <div class="cart-left flex">
          <img :src="item.product.image">
          <div class>
              <h4>{{ item.product.name }}</h4>
              <h6>{{item.product.price }} kr/st</h6>
          </div>
      </div>
      <div class="cart-right flex">
            <div class="flex btn-group">
                <button @click="subQuantity(item.product._id)" class="btn btn-q">-</button>
                <p>{{ item.quantity }}</p>
                <button @click="addQuantity(item.product._id)" class="btn btn-q">+</button>
            </div>
            <h3>{{ quantityXPrice }} kr</h3>    
      </div>
      <button @click="removeCartItem(item.product._id)" class="trash btn"><i class="fa-regular fa-trash-can"></i></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['item'],
    computed: {
        quantityXPrice() {
            return this.item.quantity * this.item.product.price
        }
    },
    methods: {
    ...mapActions(['removeCartItem', 'addQuantity', 'subQuantity'])
    }

}
</script>

<style scoped>

.cart-card {
    box-shadow: 3px 3px 10px #cfcfcf;
    margin-bottom: 1rem;
    padding-right: 1.5rem;
    position: relative;
    border-left: 1px transparent solid;
}

img {
    height: 100px;
    margin-right: 1rem;
    border: 4px solid transparent;
}

h4 {
    margin-bottom: .5rem;
}

.btn-group {
    width: 80px
}

.btn-q {
    font-size: 1.5rem;
    font-family: 'Oswald', sans-serif;
    color: var(--secondary-color);
    padding: .5rem;
}

.cart-right {
    width: 150px;
}

.trash {
    position: absolute;
    top: 0;
    right: -.5rem;
    font-size: 1rem;
}

</style>