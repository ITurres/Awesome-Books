import updateBooksListOnDOM from '../markup-injectors/inject-update-books-list-on-dom.js';
import storeNewBookData from './books-data-localStorage.js';
import removeBook from './remove-book.js';

if (window.localStorage.length > 0) {
  updateBooksListOnDOM('allBooks');
}

document.querySelector('[data-add-note-btn]').addEventListener('click', () => {
  const bookTitle = document.querySelector('input[name="title"]').value;
  const bookAuthor = document.querySelector('input[name="author"]').value;
  if (!bookTitle || !bookAuthor) {
    return;
  }
  storeNewBookData(bookTitle, bookAuthor);
  window.location.reload();
  updateBooksListOnDOM('lastBook');
});

document.querySelectorAll('[data-remove-book-btn]').forEach((button) => {
  button.addEventListener('click', () => {
    removeBook(Number(button.id));
    window.location.reload();
  });
});
