import createBookItemMarkupTemplate from '../markup-templates/book-item-markup-template.js';

const updateBooksListOnDOM = (updateWhen) => {
  const bookListHolder = document.querySelector('[data-books-list-holder]');
  const booksStored = JSON.parse(localStorage.getItem('bookList'));
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
