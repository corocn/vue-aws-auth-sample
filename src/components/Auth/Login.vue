<template>
  <div class="login">
    <h2>You need to login</h2>
    <form>
      <input type="email" v-model="email" placeholder="email"/>
      <input type='password' v-model="password" placeholder="password"/>
      <input type="button" @click="login" value="Login">
    </form>
    <router-link :to="'register'">Register</router-link>
  </div>
</template>

<script>
  import Amplify, {Auth} from 'aws-amplify'
  import config from '@/lib/aws_config'

  Amplify.configure(config)

  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        Auth.signIn(this.email, this.password)
          .then((data) => {
            alert('ログイン成功!!')
            this.$router.push('action')
          })
          .catch((err) => {
            console.log(err)
            alert('サインインに失敗しました')
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
