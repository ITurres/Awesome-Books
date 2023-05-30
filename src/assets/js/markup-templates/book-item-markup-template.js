function createBookItemMarkupTemplate(book) {
  return `<form action="#" class="book-item">
    <span>${book.title}</span><br /><span>${book.author}</span><br />
    <button id="${book.id}" type="submit" data-remove-book-btn>Remove</button>
    <hr />
    </form>`;
}

export default createBookItemMarkupTemplate;
