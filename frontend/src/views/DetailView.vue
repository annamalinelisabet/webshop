<template>     
    <div class="detail-card flex" v-if="product">
    <button @click="back" class="btn absolute"><i class="fa-solid fa-arrow-left-long"></i></button>
      <img :src="product.image">
      <div class="text-box">
        <h1>{{ product.name }}</h1>
        <p class="price-text">{{ product.price }} kr</p>
        <p class="detail-text">{{ product.description }}</p>
        <button @click="addToCart({ product, quantity })" class="btn btn-primary btn-w">LÄGG I VARUKORGEN</button>
      </div>
    </div>
    <div class="loading-text" v-else>Hämtar ölen...</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProductById', 'clearProduct', 'addToCart']),
    back() {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  },
  unmounted() {
    this.clearProduct()
  }
  
}
</script>

<style scoped>

  .detail-card {
    background: white;
    width: 60%;
    margin: 5rem auto;
    position: relative;
  }

  .absolute {
    position: absolute;
    top: -4rem;
    left: -1rem;
    font-size: 2rem;
  }

  img {
    flex: 1;
  }

  .text-box {
    flex: 1;
    padding: 2rem;
  }

  .price-text {
    font-weight: bold;
    margin-top: .5rem;
  }

  .detail-text {
    margin: 1rem 0 2rem 0;
  }

  .loading-text {
    font-size: 2rem;
    text-align: center;
    margin-top: 7rem;
  }

  @media (max-width: 1024px) {
    .detail-card {
      flex-direction: column;
      width: 90%;
      padding-top: 2rem;
    }

    .text-box {
      text-align: center;
    }
  }

</style>