<template>
  <div class="container">
    <router-link to="/login"><button @click="logout" class="btn btn-primary btn-w">LOGGA UT</button></router-link>
    <div class="card-wrapper">
        <h2>Mina lagda ordrar</h2>
        <OrderCard v-for="order in orders" :key="order._id" :order="order"/>
    </div>
  </div>
</template>

<script>
import OrderCard from '../components/OrderCard.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['userId'],
  components: { OrderCard },
  methods: {
    ...mapActions(['logout', 'getUserOrders']),
  },
  computed: {
    ...mapGetters(['orders'])
  },
  created() {
    this.getUserOrders(this.userId)
      .catch(() => {
          this.$router.push({name: 'notFound'})        
      })
  }

}
</script>

<style scoped>
.card-wrapper {
  margin-block: 3rem;
}

h2 {
  text-align: center;
}

button {
  margin-top: 2rem;
}

</style>