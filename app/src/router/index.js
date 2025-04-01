import { createRouter, createWebHistory } from 'vue-router'
import EnrollmentView from '../views/EnrollmentView.vue'
import ScoresView from '../views/ScoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/enrollment',
      name: 'Enrollment by Borough',
      component: EnrollmentView,
    },
    {
      path: '/scores',
      name: 'Score Charts',
      component: ScoresView,
    },
  ],
})

export default router
