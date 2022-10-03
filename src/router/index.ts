import { createRouter, createWebHistory } from 'vue-router'
import SubmitScores from '../views/SubmitScores.vue'
import ResultsScreen from '../views/Results.vue'
import Login from '../views/Login.vue'
import { scoreStore } from '@/stores/scores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'submit',
      component: SubmitScores,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsScreen,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const store = scoreStore()
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = store.currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router
