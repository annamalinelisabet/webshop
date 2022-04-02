<template>
    <div class="container down">
        <h3>Tack för din order!</h3>
        
        <div class="flex btn-group">
            <router-link to="/"><button class="btn btn-primary">STARTSIDAN</button></router-link>
            <router-link :to="{name: 'account', params: {userId: userId}}"><button class="btn btn-secondary">MINA SIDOR</button></router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['userId'])
    }
}
</script>

<style scoped>

h3 {
    text-align: center;
    font-size: 2rem;
}

.btn-group {
    justify-content: center;
}

button {
    margin: 2rem;
}

</style>