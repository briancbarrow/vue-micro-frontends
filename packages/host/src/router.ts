import { createMemoryHistory, createRouter } from 'vue-router'
import MainPage from './views/MainPage.vue'
import SigninPage from './views/SigninPage.vue'
import RegisterPage from './views/RegisterPage.vue'
// import { useSessionStore } from './stores/session'
// import { routeManifest } from './router/routeMaifest'

// const getRoutes = () => {
//   return routeManifest.map((mfe) => ({
//     path: mfe.route.path,
//     name: mfe.route.name,
//     meta: mfe.route.meta,
//     component: () => import('@/components/TheLoader.vue'),
//   }))
// }

// const routes = getRoutes()

const routes = [
  { path: '/', component: MainPage },
  { path: '/signin', component: SigninPage },
  { path: '/register', component: RegisterPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// router.beforeEach((to) => {
//   const sessionStore = useSessionStore()
// })

export default router
