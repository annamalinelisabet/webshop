<template>
  <div class="container down">
      Account om inloggad

      <router-link to="/login"><button @click="logout" class="btn btn-primary">LOGGA UT</button></router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['logout'])
  }

}
</script>

<style>

</style>