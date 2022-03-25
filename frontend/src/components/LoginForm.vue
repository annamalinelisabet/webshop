<template>
    <form>
        <h1>LOGGA IN</h1>
        <div class="input-group">
            <label for="email">Email:</label>
            <input class="input" type="email" placeholder="Ange din emailadress...">
        </div>
        <div class="input-group">
            <label for="password">Lösenord:</label>
            <input class="input" type="password" placeholder="Ange ditt lösenord....">
        </div>
        <button class="btn btn-primary btn-w">LOGGA IN</button>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
    form {
        background: white;
        padding: 2rem 3rem;
    }

    h1 {
        text-align: center;
        margin-bottom: .8rem;
    }

    .input {
        width: 100%;
        margin: .2rem 0 1.2rem 0;
        padding: .6em .5em;
        border: 1px solid black;
    }

    button {
        margin-top: .6rem;
    }
</style>