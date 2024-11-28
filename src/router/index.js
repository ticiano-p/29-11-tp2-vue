import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Presentación',
      
      component: () => import('../views/homeview.vue'),
      
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductsPage.vue')
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import('../views/CarritoView.vue')
    },
    {
      path: '/contactos',
      name: 'Contactos',
      component: () => import('../views/contactosview.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin.vue')
    },
    {
      path: '/admin-sec=suscritos',
      name: 'Suscritos',
      component: () => import('../views/adminSuscritos.vue')
    }
  ],
})

export default router












