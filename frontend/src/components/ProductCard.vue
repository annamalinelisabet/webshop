<template>
    <div class="card">
        <router-link :to="{name: 'details', params: {id: product._id}}">
            <img class="card-img" :src="product.image">
        </router-link>
        <div class="flex">
          <div class="card-text">
            <router-link :to="{name: 'details', params: {id: product._id}}"><h3>{{product.name}}</h3></router-link>
            <h5>{{product.price}} kr</h5>
          </div>
          <button @click="addToCart({ product, quantity })" class="btn btn-add-to-cart"><i class="fa-solid fa-cart-plus"></i></button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['product'],
    data() {
      return {
        quantity: 1
      }
    },
    methods: {
      ...mapActions(['addToCart'])
    }
}
</script>

<style scoped>
  .card {
    background: white;
  }

  .card-img {
    width: 100%;
    border: 4px solid white;
  }

  .card-img:hover {
    border: 4px solid var(--secondary-color)
  }

  .card-text {
    margin: 0 0 .4rem .6rem;
  }

  h3 {
    color: black;
    margin-bottom: .3rem;
  }

  h3:hover {
    text-decoration: underline;
  }

  .btn-add-to-cart {
    font-size: 1.5rem;
    padding: .6em;
    transition: transform .2s;
  }

  .btn-add-to-cart:active {
    transform: scale(.8);
  }
</style>