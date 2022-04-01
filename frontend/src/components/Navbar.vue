<template>
<nav>
    <div class="navbar flex">
        <router-link to="/"><h1 class="logo">LOGO</h1></router-link>  
        <div class="flex links">
            <router-link v-if="!loggedIn" class="relative" to="/login"><i class="fa-solid fa-user link"></i></router-link>
            <router-link v-else class="relative" to="/account"><i class="fa-solid fa-user link"></i></router-link>
            <router-link class="relative" to="/cart"><i class="fa-solid fa-cart-shopping link"></i><div v-if="cartCounter" class="counter flex">{{ cartCounter }}</div></router-link>
        </div>
    </div>
</nav> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'NavbarComponent',
    computed: {
        ...mapGetters(['cartCounter', 'loggedIn'])
    }
}
</script>

<style scoped>
    nav {
        position: fixed;
        width: 100%;
        background: #f3f3f3;
        z-index: 1;
    }

    .navbar {
        padding-block: 1rem;
        width: 90%;    
        margin: auto;
    }

    .links {
        width: 10%;
    }

    .link {
        font-size: 2rem;
        color: black;
        transition: transform .2s;
    }

    .link:hover {
        transform: scale(1.2);
    }

    .logo {
        font-size: 50px;
        font-family: 'Oswald', sans-serif;
        background: var(--primary-color);
        color: var(--text-logo-color);
        padding: .3rem 2rem .3rem .5rem;
    }

    .logo::after {
        content: ".";
        color: var(--secondary-color);
    }

    .relative {
        position: relative;
    }

    .counter {
        background: var(--secondary-color);
        color: white;
        padding: .1rem .4rem;
        border-radius: 100vh;
        font-size: .8rem;
        position: absolute;
        bottom: .5rem;
        left: 1.8rem;
    }

     @media (max-width: 992px) {
        .links {
            width: 20%;
        }

  }

</style>