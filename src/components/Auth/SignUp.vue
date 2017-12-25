<template>
  <div class="signUp">
    <h1>Sign Up</h1>
    <input type="email" v-model="email" placeholder="email"/>
    <input type='password' v-model="password" placeholder="password"/>
    <button type="button" @click="sign_up">Sign Up</button>
  </div>
</template>

<script>
  import Amplify, {Auth} from 'aws-amplify'
  import config from '@/lib/aws_config'

  Amplify.configure(config)

  export default {
    name: 'SignUp',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      sign_up () {
        Auth.signUp(this.email, this.password)
          .then((data) => {
            alert('登録メールアドレスに検証コードを送信しました。')
            this.$router.push('confirm_sign_up')
          })
          .catch((err) => {
            console.log(err)
            alert('エラーが発生しました:' + err)
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
