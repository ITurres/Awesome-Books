const createBookItemMarkupTemplate = (book) => `<tr class="book-item">
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td class="d-flex justify-content-end">
        <button id="${book.id}" class="btn btn-secondary"
           type="button"
           data-remove-book-btn>Remove
        </button>
      </td>
    </tr>`;

export default createBookItemMarkupTemplate;
