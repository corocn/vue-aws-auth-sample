<template>
  <div class="confirmRegister">
    <h1>Confirm Register</h1>
    <input type="email" v-model="email" placeholder="email"/>
    <input type="text" v-model="code" placeholder="code on mail body"/>
    <input type="submit" @click="submit" value="Confirm">
  </div>
</template>

<script>
  import Amplify, {Auth} from 'aws-amplify'
  import config from '@/lib/aws_config'

  Amplify.configure(config)

  export default {
    name: 'ConfirmRegister',
    data () {
      return {
        email: '',
        code: ''
      }
    },
    methods: {
      submit () {
        Auth.confirmSignUp(this.email, this.code)
          .then((data) => {
            alert('ユーザ登録が完了しました。')
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err)
            alert('検証に失敗しました')
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
