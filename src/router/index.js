import Vue from 'vue'
import Router from 'vue-router'
import Amplify, { Auth } from 'aws-amplify'
import config from '@/lib/aws_config'
import Authentication from '@/components/Auth'
import Register from '@/components/Auth/Register'
import ConfirmRegister from '@/components/Auth/ConfirmRegister'
import Login from '@/components/Auth/Login'
import Logout from '@/components/Auth/Logout'
import Action from '@/components/Action'

Amplify.configure(config)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Action
    },
    {
      path: '/auth',
      name: 'auth',
      component: Authentication,
      children: [
        {
          path: 'register',
          name: 'register',
          alias: '/register',
          component: Register
        },
        {
          path: 'confirm_register',
          name: 'confirm_register',
          alias: '/confirm_register',
          component: ConfirmRegister
        },
        {
          path: 'login',
          name: 'login',
          alias: '/login',
          component: Login
        },
        {
          path: 'logout',
          name: 'logout',
          alias: '/logout',
          component: Logout
        }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})

const noAuthNames = [
  'login',
  'register',
  'confirm_register'
]

router.beforeEach((to, from, next) => {
  if (noAuthNames.includes(to.name)) {
    return next()
  }

  Auth.currentAuthenticatedUser()
    .then((data) => {
      console.log('Authenticated!!')
      console.log(data)
      next()
    })
    .catch((err) => {
      console.log(err)
      next({path: '/login'})
    })
})

export default router
