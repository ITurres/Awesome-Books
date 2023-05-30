import updateBooksListOnDOM from '../markup-injectors/inject-update-books-list-on-dom.js';
import BookList from './book-list-class.js';

if (window.localStorage.length > 0) {
  updateBooksListOnDOM('allBooks');
}

document.querySelector('[data-add-note-btn]').addEventListener('click', () => {
  const bookTitle = document.querySelector('input[name="title"]');
  const bookAuthor = document.querySelector('input[name="author"]');
  if (!bookTitle.value || !bookAuthor.value) {
    return;
  }
  const newBookList = new BookList();
  newBookList.addNewBook(bookTitle.value, bookAuthor.value);
  bookTitle.value = ''; // vendor for firefox
  bookAuthor.value = ''; // vendor for firefox
  window.location.reload();
  updateBooksListOnDOM('lastBook');
});

document.querySelectorAll('[data-remove-book-btn]').forEach((button) => {
  button.addEventListener('click', () => {
    const newBookList = new BookList();
    newBookList.removeBook(button.id);
    window.location.reload();
  });
});
