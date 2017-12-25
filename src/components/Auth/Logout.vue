<template>
  <div class="logout">
    <h1>Logout</h1>
    <button type="button" @click="logout">Logout</button>
  </div>
</template>

<script>
  import Amplify, {Auth} from 'aws-amplify'
  import config from '@/lib/aws_config'

  Amplify.configure(config)

  export default {
    name: 'Logout',
    data () {
      return {}
    },
    methods: {
      logout () {
        Auth.signOut()
          .then((data) => {
            alert('サインアウトしました')
          })
          .catch((err) => {
            console.log(err)
            alert('サインアウトに失敗しました')
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
