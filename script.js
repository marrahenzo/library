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

let bookIndex = 0;

window.onload = function () {
  let form = document.querySelector("form");
  //Render every book in array
  for (let item of myLibrary) {
    let book = new Book(item.title, item.author, item.pages, item.read);
    loadBook(book);
  }
  //Display form
  let addBookButton = document.querySelector("#btn-add-book");
  addBookButton.addEventListener("click", () => {
    form.style.visibility = "visible";
  });
  //Add book to array, render and hide form
  let submitButton = document.querySelector("#btn-submit");
  submitButton.addEventListener("click", () => {
    form.style.visibility = "hidden";
    let bookTitle = form.querySelector("#title").value;
    let bookAuthor = form.querySelector("#author").value;
    let bookPages = form.querySelector("#pages").value;
    let bookRead = form.querySelector("input[name='read']:checked").value;
    bookRead = bookRead === "true";
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  });
};

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  loadBook(book);
}

function loadBook(book) {
  //Create HTML elements for books
  const bookContainer = document.querySelector("#book-container");
  let bookElement = document.createElement("div");
  let bookTitle = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let bookRead = document.createElement("button");
  let bookDelete = document.createElement("img");
  //Change read state and update element in array on click
  bookRead.addEventListener("click", () => {
    let parent = bookRead.parentNode;
    if (parent.dataset.read == "true") {
      parent.dataset.read = "false";
      console.log(bookElement.dataset.index);
      myLibrary[bookElement.dataset.index].read = false;
    } else {
      parent.dataset.read = "true";
      myLibrary[bookElement.dataset.index].read = true;
    }
  });
  //Remove book from array and DOM, and re-index all books on screen
  bookDelete.addEventListener("click", () => {
    myLibrary.splice(bookElement.dataset.index, 1);
    bookDelete.parentElement.remove();
    let counter = 0;
    let booksInPage = document.querySelectorAll(".book");
    for (let book of booksInPage) {
      console.log(book.dataset.index);
      book.dataset.index = counter;
      console.log(book.dataset.index);
      counter++;
    }
  });
  //Fill elements with the provided data and render them
  bookTitle.textContent = "Title: " + book.title;
  bookTitle.id = "title";
  bookAuthor.textContent = "Author: " + book.author;
  bookAuthor.id = "author";
  bookPages.textContent = "Pages: " + book.pages;
  bookPages.id = "pages";
  bookDelete.src = "./media/delete.png";
  bookDelete.alt = "Delete";
  bookElement.className = "book";
  bookElement.dataset.read = book.read;
  bookElement.dataset.index = bookIndex;
  bookElement.append(bookTitle, bookAuthor, bookPages, bookRead, bookDelete);
  bookContainer.appendChild(bookElement);
  bookIndex++;
}
