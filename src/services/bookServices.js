class BookServices {
  listBooks = []
  constructor() {
    this.listBooks = []
  }

  get getListBooks() {
    return this.listBooks
  }
  async fetchBooksByTittle(title) {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}`,
    )
    this.listBooks = await response.json()
    return this.listBooks
  }

  async displayBookResult(title) {
    const data = await this.fetchBooksByTittle(title)
    let bookArray = data.docs

    let bookList = bookArray.slice(0, 10).map((book) => ({
      title: book.title,
      autor: book.author_name,
      cover: book.cover_i,
      cover_img_url: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
    }))

    return bookList
  }
}

export default new BookServices()
