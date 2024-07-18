import { createRouter, createWebHistory } from 'vue-router'
import AgreementPage from '../views/AgreementPage.vue'
import CreditDetalization from '../views/CreditDetalization.vue'
import DebtsPage from '../views/DebtsPage.vue'
import ExtractPage from '../views/ExtractPage.vue'
import GetCreditPage from '../views/GetCreditPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import RegisterPage from '../views/RegisterPage.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: ProfilePage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
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
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/debts',
    name: 'debts',
    component: DebtsPage
  },
  {
    path: '/credit',
    name: 'credit',
    component: GetCreditPage
  },
  {
    path: '/credit/detalization',
    name: 'credit-detalization',
    component: CreditDetalization
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: AgreementPage
  },
  {
    path: '/extract',
    name: 'extract',
    component: ExtractPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes: routes
})

export default router
