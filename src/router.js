import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import(/* webpackChunkName: "Servicios" */ './views/Servicios.vue')
    },
    {
      path: '/fotos/:id',
      name: 'fotos',
      component: () => import(/* webpackChunkName: "Fotos" */ './views/Fotos.vue')
    },
    {
      path: '/columnas',
      name: 'columnas',
      component: () => import(/* webpackChunkName: "Columnas" */ './views/Columnas.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import(/* webpackChunkName: "Forms" */ './views/Forms.vue')
    },
    {
      path: '/CRUD',
      name: 'CRUD',
      component: () => import(/* webpackChunkName: "CRUD" */ './views/CRUD.vue')
    }
  ]
})
