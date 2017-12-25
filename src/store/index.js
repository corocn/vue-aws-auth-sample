import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Amplify, {API, Auth, Storage} from 'aws-amplify'
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
  },
  setUser (state, user) {
    state.user = user
  },
  clearUser (state) {
    state.user = null
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

    const result = await Storage.put('test.txt', 'Hello', {
      contentType: 'text/plain'
    }).catch(err => console.log(err))

    console.log(result)
  },
  async currentUser (context) {
    const data = await Auth.currentAuthenticatedUser().catch((error) => {
      console.log(error)
    })

    if (data) {
      context.commit('setUser', data)
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

    context.commit('clearUser')
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
