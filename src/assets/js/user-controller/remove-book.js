import updateBookId from './update-books-id.js';

const removeBook = (bookId) => {
  const booksStored = JSON.parse(localStorage.getItem('bookList'));
  booksStored.splice(bookId, 1);
  updateBookId(booksStored);
  localStorage.setItem('bookList', JSON.stringify(booksStored));
};

export default removeBook;
