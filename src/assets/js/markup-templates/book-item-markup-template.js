function createBookItemMarkupTemplate(book) {
  return `<div class="book-item">
    <span>${book.title}</span><br /><span>${book.author}</span><br />
    <button id="${book.id}" type="button" data-remove-book-btn>Remove</button>
    <hr />
    </div>`;
}

export default createBookItemMarkupTemplate;
