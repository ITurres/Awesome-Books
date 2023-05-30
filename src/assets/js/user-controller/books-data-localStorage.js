const storeNewBookData = (bookTitle, bookAuthor) => {
  let booksStored = JSON.parse(localStorage.getItem('bookList'));
  if (booksStored == null) booksStored = [];
  booksStored.push({
    id: booksStored.length,
    title: bookTitle,
    author: bookAuthor
  });
  localStorage.setItem('bookList', JSON.stringify(booksStored));
};

export default storeNewBookData;
