import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import LoginForm from '@/views/default/LoginForm.vue'
// import EventList from '../views/EventList.vue'
// import EventDetails from '../views/EventDetails.vue'
// import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
  //   {
  //     path: '/event/:id',
  //     name: 'EventDetails',
  //     props: true,
  //     component: EventDetails
  //   },
  //   {
  //     path: '/about',
  //     name: 'About',
  //     component: About
  //   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
