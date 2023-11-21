import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/homepage.vue'
import AboutMe from '@/views/about-me.vue'
import ContactMe from '@/views/contact.vue'
import Portfolio from '@/views/portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-me',
      name: 'about me',
      component: AboutMe
    },
    {
      path: '/contact-me',
      name: 'contact',
      component: ContactMe
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
  ]
})

export default router
