import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Amplify, {API, Auth} from 'aws-amplify'
import config from '@/lib/aws_config'

Vue.use(Vuex)

Amplify.configure(config)

const state = {
  user: null,
  message: null
}

const mutations = {
  setMessage (state, {title, type}) {
    state.message = {
      title: title,
      type: type
    }
  }
}

const actions = {
  async getGuestMessage (context) {
    const data = await API.get('App', '/guest').catch((error) => {
      console.log(error)
    })

    if (data) {
      context.commit('setMessage', {title: data.message, type: 'success'})
    }
  },
  async getMemberMessage (context) {
    const data = await API.get('App', '/member').catch((error) => {
      console.log(error)
    })

    if (data) {
      context.commit('setMessage', {title: data.message, type: 'warning'})
    }
  },
  async login (context, loginData) {
    const data = await Auth.signIn(loginData.email, loginData.password).catch((error) => {
      console.log('login failed', error)
      alert(error)
    })

    if (data) {
      router.push('action')
    }
  },
  async logout (context) {
    await Auth.signOut().catch((error) => {
      console.log('logout failed', error)
      alert(error)
    })

    router.push('login')
  },
  async regist (context, loginData) {
    const data = await Auth.signUp(loginData.email, loginData.password).catch((error) => {
      console.log('Error!', error)
      alert(error)
    })

    if (data) {
      router.push('confirm_register')
    }
  },
  async confirm_regist (context, loginData) {
    const data = await Auth.confirmSignUp(loginData.email, loginData.code).catch((error) => {
      console.log('Error!', error)
      alert(error)
    })

    if (data) {
      router.push('/')
    }
  }
}

const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
