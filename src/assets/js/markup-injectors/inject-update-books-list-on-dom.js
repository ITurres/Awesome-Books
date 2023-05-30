import createBookItemMarkupTemplate from '../markup-templates/book-item-markup-template.js';
import BookList from '../user-controller/book-list-class.js';

const updateBooksListOnDOM = (updateWhen) => {
  const bookListHolder = document.querySelector('[data-books-list-holder]');
  const booksStored = new BookList().getBooksStored();
  if (updateWhen === 'lastBook') {
    bookListHolder.innerHTML += createBookItemMarkupTemplate(
      booksStored[booksStored.length - 1]
    );
  } else if (updateWhen === 'allBooks') {
    booksStored.forEach((book) => {
      bookListHolder.innerHTML += createBookItemMarkupTemplate(book);
    });
  }
};

export default updateBooksListOnDOM;
