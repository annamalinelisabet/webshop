<template>
<div class="container down">
  <h2>Ojdå! Du behöver visst logga in!</h2>
  <LoginForm />
</div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
    components: {
        LoginForm
    }
}
</script>

<style scoped>
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

</style>