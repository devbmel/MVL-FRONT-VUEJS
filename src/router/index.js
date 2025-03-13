import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ConnexionView from '@/views/ConnexionView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LibraryView from '@/views/LibraryView.vue'
import WishlistView from '@/views/WishlistView.vue'
import { useAuthStore } from '@/stores/authentification'
import HomePageUserView from '@/views/HomePageUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'loginForm',
      component: ConnexionView,
    },
    {
      path: '/register',
      name: 'inscriptionForm',
      component: RegisterView,
    },
    {
      path: '/homePage',
      name: 'homePageUser',
      component: HomePageUserView,
    },
    {
      path: '/library',
      name: 'library',
      component: LibraryView,
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView,
    },
  ],
})

export default router
