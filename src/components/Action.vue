<template>
  <div class="action">
    <h1>Action</h1>
    <button type="button" @click="guest">Call API /guest</button>
    <button type="button" @click="member">Call API /member</button>
  </div>
</template>

<script>
  import Amplify, {API} from 'aws-amplify'
  import config from '@/lib/aws_config'

  Amplify.configure(config)

export default {
    name: 'Action',
    data () {
      return {}
    },
    methods: {
      guest () {
        API.get('AmplifyTest', '/guest')
          .then(response => {
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
      },
      member () {
        API.get('AmplifyTest', '/member')
          .then(response => {
            console.log(response)
          })
          .catch(err => {
            console.log(err)
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
