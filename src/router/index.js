import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/views/default/LoginForm.vue'
import App from '@/App.vue'
import DefaultVue from '@/views/default/DefaultVue.vue'
import HelloWorld from '@/views/default/HelloWorld.vue'
import CommentsVue from '@/views/Comments.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
  {
    path: '/default',
    name: 'DefaultVue',
    component: DefaultVue,
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld,
    props: true,
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
  {
    path: '/comments',
    name: 'CommentsVue',
    component: CommentsVue,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
