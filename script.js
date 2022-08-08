let myLibrary = new Array();

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for(let key in myLibrary) {
        console.table(myLibrary[key].info());
    }
}



//Query selectors and functions to move the form up and down



function translateForm() {
    submitForm.classList.add("active");
}

function parseBookInfo() {
    //create a book
    let title = titleInput.value;
    let author = authorInput.value;
    let pageNum = pageNumInput.value;
    //create and add a book
    const book = new Book(title, author, pageNum);
    addBookToLibrary(book);
    console.log(myLibrary);
    //move form back to original place
    submitForm.classList.remove("active");
}

function cancelForm() {
    submitForm.classList.remove("active");
}

const body = document.querySelector("body");
const submitForm = document.querySelector(".submit-book");
const addBook = document.querySelector(".addBook");
const cancelBook = submitForm.querySelector('input[name="cancel"]' );
const addBookButton = document.querySelector('input[name="addBook"]');

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageNumInput = document.getElementById("pageNum");

cancelBook.addEventListener("click", cancelForm);
addBookButton.addEventListener("click", parseBookInfo );
addBook.addEventListener("click", translateForm);