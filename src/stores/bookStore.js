import { defineStore } from 'pinia'

export const listBooksStore = defineStore('', {
  state: () => ({
    books: [],
  }),

  getters: {
    getBooks(state) {
      return state.books
    },
  },

  actions: {
    async getBookDataByTitle(title) {
      const response = await fetch(
        `ttps://openlibrary.org/search.json?q=${encodeURIComponent(title)}`,
      )
      this.books = await response.json()
    },
  },
})
