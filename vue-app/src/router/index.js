import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import WorksView from '../views/WorksView.vue'
import NewsView from '../views/NewsView.vue'
import FaqView from '../views/FaqView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
