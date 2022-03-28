<template>
    <div class="image-wrapper">
      <div class="hero">
        <div class="hero-info flex">
          <h1>LOVE IS ALE WE NEED</h1>
          <button @click="goTo" class="btn btn-secondary">VÅRT SORTIMENT</button>
        </div>
      </div>
    </div>

    <div class="card-wrapper" v-if="products">
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
    background: url('https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'), rgba(0, 0, 0, 0.178);
    background-blend-mode: multiply;
    height: 70vh;
    background-size: cover;
    background-position: center;
  }

  .hero-info {
    justify-content: center;
    text-align: center;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;

  }

  h1 {
    color: var(--text-logo-color);
    text-shadow: 3px 3px var(--primary-color);
    font-size: 100px;
  }

  button {
    padding: 1em 2em;
    font-size: 1em;
    transition: transform .2s;
    margin-top: 1rem;
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
