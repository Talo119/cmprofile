import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',    
    component: () => import('../views/About.vue')
  },
  {
    path: '/experience',
    name: 'Experience',    
    component: () => import('../views/Experience.vue')
  },
  {
    path: '/skillsEducation',
    name: 'SkillsEducation',    
    component: () => import('../views/Education.vue')
  },
  {
    path: '/contact',
    name: 'Contact',    
    component: () => import('../views/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
