<template>
      <form>
        <h1>SKAPA KONTO</h1>
        <div class="input-group">
            <label for="firstName">Förnamn:</label>
            <input class="input" type="text" placeholder="Ange din förnamn...">
        </div>
        <div class="input-group">
            <label for="lastName">Efternamn:</label>
            <input class="input" type="text" placeholder="Ange din efternamn...">
        </div>
        <div class="input-group">
            <label for="email">Email:</label>
            <input class="input" type="email" placeholder="Ange din emailadress...">
        </div>
        <div class="input-group">
            <label for="password">Lösenord:</label>
            <input class="input" type="password" placeholder="Ange ditt lösenord....">
        </div>
        <button class="btn btn-primary btn-w">REGISTRERA</button>
        <h5 @click="back">Tillbaka till inloggning</h5>
    </form>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    form {
        background: white;
        padding: 2rem 3rem;
        width: 50%;
        margin: auto;
        margin-block: 3rem;
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

    h5 {
      color: black;
      text-decoration: underline;
      text-align: center;
      margin-top: 1rem;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      form {
        width: 80%;
      }
    }
</style>