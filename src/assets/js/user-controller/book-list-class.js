class BookList {
  constructor() {
    this.booksStored = JSON.parse(localStorage.getItem('bookList')) || [];
  }

  addNewBook(bookTitle, bookAuthor) {
    this.booksStored.push({
      id: this.booksStored.length,
      title: bookTitle,
      author: bookAuthor
    });
    localStorage.setItem('bookList', JSON.stringify(this.booksStored));
  }

  removeBook(bookId) {
    this.booksStored.splice(bookId, 1);
    this.updateBookId();
    localStorage.setItem('bookList', JSON.stringify(this.booksStored));
  }

  updateBookId() {
    this.booksStored.forEach((book, id) => {
      book.id = id;
    });
  }

  getBooksStored() {
    return this.booksStored;
  }
}

export default BookList;
