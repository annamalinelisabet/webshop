<template>
    <div class="container down">
        <h3>Tack för din order!</h3>
        
        <div class="flex btn-group">
            <router-link to="/"><button class="btn btn-primary">STARTSIDAN</button></router-link>
            <router-link to="/account"><button class="btn btn-secondary">MINA SIDOR</button></router-link>
        </div>
    </div>
</template>

<script>
export default {

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