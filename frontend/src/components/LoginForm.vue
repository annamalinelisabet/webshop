<template>
    <form @submit.prevent="handleSubmit">
        <h1>LOGGA IN</h1>
        <div class="input-group">
            <label for="email">Email:</label>
            <input class="input" type="email" v-model="email">
        </div>
        <div class="input-group">
            <label for="password">Lösenord:</label>
            <input class="input" type="password" v-model="password">
        </div>
        <small class="error">{{ errorText }}</small>
        <button class="btn btn-primary btn-w">LOGGA IN</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: '',
            errorText: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        handleSubmit() {
            if(this.email.trim() === '' || this.password.trim() === '') {
                this.errorText = 'Du behöver fylla i båda fälten...'
                return
            } 

            let user = {
                email: this.email,
                password: this.password
            }

            this.login(user)
                .then(() => {
                    if(this.$route.query.redirect) {
                        this.$router.push(this.$route.query.redirect)
                    } else {
                        this.$router.push('/')
                    }
                })
                .catch(() => {
                    this.errorText = 'Du har angett fel email eller lösenord...'
                })

        }
    }
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

    .error {
        color: red;
        font-weight: bold;
    }
</style>