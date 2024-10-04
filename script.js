
const addNewBook = document.getElementById("add-new-book");
const bookForm = document.getElementById("book-form")
const submitBook = document.getElementById("submit-book")
const close = document.getElementById("close")

bookForm.addEventListener("submit", () => {
    event.preventDefault();
    newBook();
    bookForm.classList.remove("open")   
});

addNewBook.addEventListener("click", () => {
    bookForm.classList.add("open")
})

close.addEventListener("click", () => {
    bookForm.classList.remove("open")
})

const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function newBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let nextBook = new Book(title, author, pages, read);
    library.push(nextBook);
    refreshLibrary();
}

function refreshLibrary() {
    let libraryBook = document.getElementById("library");
    libraryBook.innerHTML = "";
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        let bookElement = document.createElement("div");
        bookElement.innerHTML = `
        <div class="book">
            <div class="book-info">
                <h1 class="title">${book.title}</h1>
                <h3 class="author">${book.author}</h3>
            </div>
            <div class="book-details">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read/Finished Yet"}</p>
            </div>
            <div class="buttons">
                <button class="toggle-read" onclick="toggleRead(${i})">Toggle Read</button>
                <button class="remove-book" onclick="removeBook(${i})">Remove</button>
            </div>
        </div> 
        `;
        libraryBook.appendChild(bookElement)
    }
}

function removeBook(index) {
    library.splice(index, 1);
    refreshLibrary();
}

function toggleRead(index) {
    library[index].toggleRead();
    refreshLibrary();
}