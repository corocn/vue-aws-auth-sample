<template>
  <el-container>
    <el-main>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="../../assets/register.png" />
            <h1>Confirm Register</h1>
            <el-row>
              <el-form ref="form" @submit.native.prevent>
                <el-form-item label="Email">
                  <el-input v-model="email" type="email" name="username"></el-input>
                </el-form-item>
                <el-form-item label="Validation Code">
                  <el-input v-model="code" type="text" name="code"></el-input>
                </el-form-item>
                <el-button type="primary" native-type="button" @click="onSubmit">
                  Confirmed
                </el-button>
              </el-form>
            </el-row>
            <el-row>
              <router-link :to="'login'">
                Back to Login
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
    name: 'Register',
    data () {
      return {
        email: '',
        code: ''
      }
    },
    methods: {
      ...mapActions(['confirm_regist']),
      onSubmit () {
        this.confirm_regist({
          email: this.email,
          code: this.code
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
