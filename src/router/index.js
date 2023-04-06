import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Edit from '../components/Edit.vue'
import NotFound from '../views/404page.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/edit/:id',
      name: 'edit',
      component:Edit,
      props: true  
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },


    {
      path:'/:pathmatch(.*)*',
      name:'notfound',
      component:NotFound
    }


    
  ]
})

export default router
