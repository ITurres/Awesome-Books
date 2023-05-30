const updateBookId = (booksStored) => {
  booksStored.forEach((book, id) => {
    book.id = id;
  });
};

export default updateBookId;
