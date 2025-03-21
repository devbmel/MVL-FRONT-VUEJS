import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null }),
  user: useLocalStorage('users'),
  actions: {
    async login(email, password) {
      console.log('Bonjour')
      console.log(import.meta.env.VITE_BASE_URL_MVL)
      const response = await fetch(`${import.meta.env.VITE_BASE_URL_MVL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) throw new Error('Login failed')
      const data = await response.json()
      this.user = data.user
    },
    async signup(username, email, password) {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL_MVL}/auth/register`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })

      if (response.ok) {
        this.user = await response.json()
      } else {
        console.error('Signup failed', response)
        throw new Error('nup failed')
      }
    },
  },
})
