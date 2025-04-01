import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScoresView from '../views/ScoresView.vue'
import EnrollmentView from '../views/EnrollmentView.vue'

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
      name: 'School Performance',
      component: ScoresView,
    },
    {
      path: '/enrollment',
      name: 'Enrollment',
      component: EnrollmentView,
    },
  ],
})

export default router
