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
          <select @change="changeQuantity(value)" v-bind:value="item.quantity">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
          </select>
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
        },
        changeQuantity(value) {
            value = this.item.quantity
            console.log(value)
            return value            
        }
    },
    methods: {
        ...mapActions(['removeCartItem'])
    }

}
</script>

<style scoped>

.cart-card {
    box-shadow: 3px 3px 10px #cfcfcf;
    margin-bottom: 1rem;
    padding-right: 2rem;
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

select {
    margin-right: 1rem;
    height: 1.5rem;
    width: 3rem;
}

.trash {
    position: absolute;
    top: 0;
    right: -.5rem;
    font-size: 1rem;
}

</style>