<template>
  <div class="container">
    <div class="login-wrapper">
      <LoginForm class="form"/>
      <div class="registration flex">
        <h2>Är du ny här?</h2>
        <h4>Hej och välkommen!</h4>
        <img src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
        <router-link to="/register"><button class="btn btn-secondary">SKAPA KONTO</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: {
    LoginForm,
  }
}
</script>

<style scoped>
  .login-wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
  }

  .form {
    flex: 3;
    margin-right: 2rem;
  }

  .registration {
    background: white;
    padding: 2rem;
    flex: 2;
    flex-direction: column;
  }

  img {
    width: 200px;
    margin: .5rem;
  }

  @media (max-width: 992px) {
    .login-wrapper {
      flex-direction: column;
    }

    .registration {
      margin-block: 2rem;
    }

    .form {
      margin-right: 0;
    }
  }
</style>