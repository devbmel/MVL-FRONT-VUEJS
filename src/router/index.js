import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ConnexionView from '@/views/ConnexionView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LibraryView from '@/views/LibraryView.vue'
import WishlistView from '@/views/wishlistview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/connexion',
      name: 'connexionForm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ConnexionView,
    },
    {
      path: '/inscription',
      name: 'inscriptionForm',
      component: RegisterView,
    },
    {
      path: '/bibliotheque',
      name: 'bibliotheque',
      component: LibraryView,
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView,
    },
    {},
  ],
})

export default router
