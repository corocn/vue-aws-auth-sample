<template>
  <el-container>
    <el-header>
      <el-col :span="20">
        <h1>Sample Apps</h1>
      </el-col>
      <el-col :span="4">
        <el-button type="danger" @click="logout">Logout</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-row>
        <el-alert v-bind:title="message.title" v-bind:type="message.type" show-icon></el-alert>
      </el-row>
      <el-row type="flex">
        <el-button @click="guest">Guest Message</el-button>
        <el-button @click="member">Member Message</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Dashboard',
    data () {
      return {}
    },
    created () {
      this.currentUser()
    },
    computed: {
      message () {
        return (this.$store.state.message) ? this.$store.state.message : { title: 'No Message', type: 'info' }
      }
    },
    methods: {
      ...mapActions(['getGuestMessage', 'getMemberMessage', 'logout', 'currentUser']),
      guest () {
        this.getGuestMessage()
      },
      member () {
        this.getMemberMessage()
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }

  .el-header {
    background-color: #6fced1;
    color: #333;
    line-height: 60px;
  }

  .el-row {
    margin-bottom: 10px;
  }
</style>
