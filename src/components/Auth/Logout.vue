<template>
  <el-container>
  </el-container>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Logout',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    created () {
      this.logout()
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>

