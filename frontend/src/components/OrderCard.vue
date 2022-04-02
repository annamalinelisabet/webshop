<template>
  <div class="flex card">
     <h3>{{order.createdAt.slice(0,10)}}</h3>
      <h3>{{order.totalPrice}} kr</h3>
  </div>
</template>

<script>
export default {
props: ['order']
}
</script>

<style scoped>
  .card {
    margin-block: 1rem;
    border-bottom: 1px solid grey;
    padding: 1rem;
  }
</style>