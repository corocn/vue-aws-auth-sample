<template>
  <el-container>
    <el-main>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="../../assets/logo.png" />
            <h1>Sample Apps</h1>
            <el-row>
              <el-form ref="form" @submit.native.prevent>
                <el-form-item label="Email">
                  <el-input v-model="email" type="email" name="username"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                  <el-input v-model="password" type="password" name="password"></el-input>
                </el-form-item>
                <el-button type="primary" native-type="button" @click="onSubmit">
                  Login
                </el-button>
              </el-form>
            </el-row>
            <el-row>
              <router-link :to="'register'">
                Register
              </router-link>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['login']),
      onSubmit () {
        this.login({
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>

<style scoped>
.el-main {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
}

img {
  width: 100%;
}
</style>
