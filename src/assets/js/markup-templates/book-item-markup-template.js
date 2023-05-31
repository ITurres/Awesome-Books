function createBookItemMarkupTemplate(book) {
  return `<tr class="book-item">
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>
      <button id="${book.id}" type="button" data-remove-book-btn>Remove</button>
     </td>
    </tr>`;
}

export default createBookItemMarkupTemplate;
