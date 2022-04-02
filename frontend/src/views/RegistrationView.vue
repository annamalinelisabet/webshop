<template>
      <form @submit.prevent="handleSubmit">
        <h1>SKAPA KONTO</h1>
        <div class="input-group">
            <label for="firstName">Förnamn:</label>
            <input class="input" type="text" v-model="firstName">
        </div>
        <div class="input-group">
            <label for="lastName">Efternamn:</label>
            <input class="input" type="text" v-model="lastName">
        </div>
        <div class="input-group">
            <label for="email">Email:</label>
            <input class="input" type="email" v-model="email">
        </div>
        <div class="input-group">
            <label for="password">Lösenord:</label>
            <input class="input" type="password" v-model="password">
        </div>
        <small class="error">{{ errorText }}</small>
        <button class="btn btn-primary btn-w">REGISTRERA</button>
        <h5 @click="back">Tillbaka till inloggning</h5>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            errorText: ''
        }
    },
    methods: {
        ...mapActions(['registerNewUserAndLogin']),
        back() {
            this.$router.go(-1)
        },
        handleSubmit() {
            if(this.lastName.trim() === '' || this.firstName.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
                this.errorText = 'Du måste fylla i alla fälten...'
                return
            }

            let user = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            }

            this.registerNewUserAndLogin(user)
                .then(() => {              
                    this.$router.push('/')                    
                })
                .catch(() => {
                    this.errorText = 'Din email finns redan registrerad...'
                })
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

    .error {
    color: red;
    font-weight: bold;
    }

    @media (max-width: 768px) {
      form {
        width: 80%;
      }
    }
</style>