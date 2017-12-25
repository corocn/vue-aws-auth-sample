import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import SignUp from '@/components/Auth/SignUp'
import ConfirmSignUp from '@/components/Auth/ConfirmSignUp'
import Login from '@/components/Auth/Login'
import Logout from '@/components/Auth/Logout'
import Action from '@/components/Auth/Action'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      children: [
        {
          path: '/sign_up',
          name: 'SignUp',
          component: SignUp
        },
        {
          path: '/confirm_sign_up',
          name: 'ConfirmSignUp',
          component: ConfirmSignUp
        },
        {
          path: '/action',
          name: 'Action',
          component: Action
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/logout',
          name: 'Logout',
          component: Logout
        }
      ]
    }
  ]
})
