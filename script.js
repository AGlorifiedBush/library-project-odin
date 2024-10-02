
const addNewBook = document.getElementById("addNewBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const bookForm = document.getElementById("bookForm")
const submitBook = document.getElementById("submitBook")
const close = document.getElementById("close")

addNewBook.addEventListener("click", () => {
    bookForm.classList.add("open")
})

close.addEventListener("click", () => {
    bookForm.classList.remove("open")
})

const library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function newBook() {
    
    
}
