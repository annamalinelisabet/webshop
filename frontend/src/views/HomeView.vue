<template>
    <div class="image-wrapper">
      <img class="hero" src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="">
      <button @click="goTo" class="btn btn-primary">VÅRT SORTIMENT</button>
    </div>

    <div class="card-wrapper" id="card" v-if="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
    <Footer />
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  components: {ProductCard, Footer},
  methods: {
    goTo() {
      window.scrollTo(0, 550)
    },
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  },
  computed: {
    ...mapGetters(['products'])
  }

}
</script>

<style scoped>
  .image-wrapper {
    position: relative;
  }

  .hero {
    width: 100%;
    height: 75vh;
  }

  button {
    padding: 1em 2em;
    font-size: 1em;
    position: absolute;
    bottom: 15rem;
    left: 50%;
    margin-left: -114.315px;
    transition: transform .2s;
  }

  button:hover {
    transform: scale(1.2);
  }

  .card-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 1rem;
    width: 70%;
    margin: 3.5rem auto;
  }
</style>
