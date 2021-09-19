import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'About',
    meta: {
      title: {
        en: 'About',
        ru: 'О проекте'
      }
    },
    component: () => import('../views/PreviewPage.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: {
        en : 'Home',
        ru: 'Главная'
      }
    }
  },
  {
    path: '/singup',
    name: 'Sing Up',
    props: { default: true, is_singup: true},
    meta: {
      title: {
        en: 'Sing Up',
        ru: 'Регистрация'
      }
    },
    component: () => import('../views/AuthPage.vue'),
  },
  {
    path: '/singin',
    name: 'Sing In',
    props: { default: true, is_singup: false},
    meta: {
      title: {
        en: 'Sing In',
        ru: 'Авторизация'
      }
    },
    component: () => import('../views/AuthPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
