import Vue from 'vue'
import Router from 'vue-router'
import { Auth } from 'aws-amplify'
import Authentication from '@/components/Auth'
import Register from '@/components/Auth/Register'
import ConfirmRegister from '@/components/Auth/ConfirmRegister'
import Login from '@/components/Auth/Login'
import Logout from '@/components/Auth/Logout'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
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

const authNoNeed = [
  'login',
  'register',
  'confirm_register'
]

router.beforeEach((to, from, next) => {
  if (authNoNeed.includes(to.name)) {
    return next()
  }

  Auth.currentAuthenticatedUser()
    .then((data) => {
      next()
    })
    .catch((err) => {
      console.log(err)
      next({path: '/login'})
    })
})

export default router
