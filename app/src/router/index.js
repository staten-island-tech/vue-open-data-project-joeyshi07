import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScoresView from '../views/ScoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/scores',
      name: 'Score Charts',
      component: ScoresView,
    },
    {
      path: '/enrollment',
      name: 'Enrollment by Borough',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EnrollmentView.vue'),
    },
  ],
})

export default router
