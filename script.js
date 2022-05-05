let myLibrary = [
  {
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    pages: 423,
    read: false,
  },
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  let bookContainer = document.querySelector("#book-container");
  bookContainer.appendChild(book);
}

function loadBooks() {
  for (let book in myLibrary) {
  }
}
