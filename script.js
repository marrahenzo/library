let myLibrary = [
  {
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    pages: 423,
    read: true,
  },
  {
    title: "The Two Towers",
    author: "J. R. R. Tolkien",
    pages: 352,
    read: true,
  },
  {
    title: "The Return of the King",
    author: "J. R. R. Tolkien",
    pages: 416,
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

window.onload = function () {
  for (let item of myLibrary) {
    let book = new Book(item.title, item.author, item.pages, item.read);
    loadBook(book);
  }
  let addBookButton = document.querySelector("#btn-add-book");
  addBookButton.addEventListener("click", () => {
    let form = document.querySelector("form");
    form.style.visibility = "visible";
  });
};

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  loadBook(book);
}

function loadBook(book) {
  const bookContainer = document.querySelector("#book-container");
  let bookElement = document.createElement("div");
  let bookTitle = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let bookRead = document.createElement("button");
  bookRead.addEventListener("click", () => {
    console.log("a");
    if (bookRead.parentNode.dataset.read == "true") {
      bookRead.parentNode.dataset.read = "false";
      bookRead.textContent = "Not Read";
    } else {
      bookRead.parentNode.dataset.read = "true";
      bookRead.textContent = "Read";
    }
  });
  bookTitle.textContent = "Title: " + book.title;
  bookAuthor.textContent = "Author: " + book.author;
  bookPages.textContent = "Pages: " + book.pages;
  bookRead.textContent = book.read ? "Read" : "Not Read";
  bookElement.className = "book";
  bookElement.dataset.read = book.read;
  bookElement.append(bookTitle, bookAuthor, bookPages, bookRead);
  bookContainer.appendChild(bookElement);
}
