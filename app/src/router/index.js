import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScoresView from '../views/ScoresView.vue'
import EnrollmentView from '../views/EnrollmentView.vue'
import EnglishMathView from '../views/EnglishMathView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/englishmath',
      name: 'English and Math Proficiency',
      component: EnglishMathView,
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
