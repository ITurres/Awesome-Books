function createBookItemMarkupTemplate(book) {
  return `<tr class="book-item d-flex-justify-content-center align-items-center">
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>
      <button id="${book.id}" class="ml-auto" type="button" data-remove-book-btn>Remove</button>
     </td>
    </tr>`;
}

export default createBookItemMarkupTemplate;
