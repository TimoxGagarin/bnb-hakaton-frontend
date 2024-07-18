import { createRouter, createWebHistory } from 'vue-router'
import AgreementPage from '../views/AgreementPage.vue'
import CreditDetalization from '../views/CreditDetalization.vue'
import DebtsPage from '../views/DebtsPage.vue'
import ExtractPage from '../views/ExtractPage.vue'
import GetCreditPage from '../views/GetCreditPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import RegisterPage from '../views/RegisterPage.vue'

import Cookies from 'js-cookie'

const routes = [
  {
    path: '/',
    name: 'profile',
    component: ProfilePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/debts',
    name: 'debts',
    component: DebtsPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/credit',
    name: 'credit',
    component: GetCreditPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/credit/detalization',
    name: 'credit-detalization',
    component: CreditDetalization,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: AgreementPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/extract',
    name: 'extract',
    component: ExtractPage,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

function isAuthenticated() {
  return Cookies.get('access_token') != null
}

export default router
