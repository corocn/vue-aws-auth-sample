<template>
  <div class="confirmSignUp">
    <h1>Confirm Sign Up</h1>
    <input type="email" v-model="email" placeholder="email"/>
    <input type='text' v-model="code" placeholder="code on mail body"/>
    <button type="button" @click="confirm_sign_up">Confirm Sign Up</button>
  </div>
</template>

<script>
  import Amplify, {Auth} from 'aws-amplify'
  import config from '@/lib/aws_config'

  Amplify.configure(config)

  export default {
    name: 'ConfirmSignUp',
    data () {
      return {
        email: '',
        code: ''
      }
    },
    methods: {
      confirm_sign_up () {
        Auth.confirmSignUp(this.email, this.code)
          .then((data) => {
            alert('ユーザ登録が完了しました。')
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
