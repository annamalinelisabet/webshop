import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'
import ReLoginView from '../views/ReLoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import AccountView from '../views/AccountView.vue'
import DetailView from '../views/DetailView.vue'
import OrderView from '../views/OrderView.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store/index'


const requireNoAuth = (to, from, next) => {
  let loggedIn = store.getters.loggedIn

  if(loggedIn) next({ name: 'account' })
  else next()
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:id',
    name: 'details',
    component: DetailView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: requireNoAuth
  },
  {
    path: '/relogin',
    name: 'relogin',
    component: ReLoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegistrationView,
    beforeEnter: requireNoAuth
  },
  {
    path: '/account/:userId',
    name: 'account',
    component: AccountView,
    props: true,
    meta: { authorize: true }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView,
    meta: { authorize: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  let loggedIn = store.getters.loggedIn
  const { authorize } = to.meta

  if(authorize) {
    if(!loggedIn) next({name: 'login', query: {redirect: to.fullPath}})
    else next()
  } 
  else {
    next()
  }

  window.scrollTo(0, 0)

})

export default router
