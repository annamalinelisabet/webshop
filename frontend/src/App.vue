<template>
  <Navbar />
  <div class="down">
  <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
export default {
  components: {Navbar},  
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}
</script>

<style>
:root {
  --primary-color: #392105;
  --secondary-color: #e26d43;
  --text-logo-color: #F0F658;
}

body, html {
  background: #f3f3f3;
  font-family: 'Cabin', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 60%;
  margin: auto;
}

.down {
  padding-top: 116px;
}

a {
  text-decoration: none;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  background: transparent;
  border: transparent;
  cursor: pointer;
  border-radius: 100vh;
  font-weight: bold;
  padding: .6em 1.2em;
  letter-spacing: .1em;
}

.btn-primary {
  background: var(--secondary-color);
  color: white;
}

.btn-secondary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover, .btn-secondary:hover {
  border-radius: 0vh;
}

.btn:active {
  filter: brightness(150%)
}

.btn-w {
  width: 100%;
}

.absolute {
  position: absolute;
  top: -4rem;
  left: -1rem;
  font-size: 2rem;
}

@media (max-width: 992px) {

.container {
  width: 90%;
}

}
</style>
