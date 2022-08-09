let myLibrary = new Array();
let runningIndex = 0;
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBook(e) {
    let targetId = e.target.parentElement.id;
    document.getElementById(targetId).remove();

}

function displayLibrary() {
    
    let key = myLibrary.length - 1;
    console.log(myLibrary[key].title);
    //every book is myLibrary[key]

    //create new book
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    newBook.id = "book" + runningIndex;
    books.appendChild(newBook);
    console.log(newBook);

    //append title to book
    const newTitle = document.createElement("p");
    newTitle.classList.add("title");
    const titleNode = document.createTextNode(myLibrary[key].title);

    newTitle.appendChild(titleNode);
    newBook.appendChild(newTitle);

    //append author to book
    const newAuthor = document.createElement("p");
    const authorNode = document.createTextNode(myLibrary[key].author);

    newAuthor.appendChild(authorNode);
    newBook.appendChild(newAuthor);

    //append pages to book
    const newPages = document.createElement("p");
    const pageNode = document.createTextNode(`${myLibrary[key].pages} pages`);

    newPages.appendChild(pageNode);
    newBook.appendChild(newPages);

    //append form to book

    const newForm = document.createElement("input");
    newForm.type = "checkbox";
    newForm.id = `read${runningIndex}`;

    //<label for="read">Have you read this?</label>
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", `read${runningIndex}`);
    newLabel.innerHTML = "Have you read this?";

    newBook.appendChild(newForm);
    newBook.appendChild(newLabel);

    
    //add a line break between label and remove button
    const breakLine = document.createElement("br");
    newBook.appendChild(breakLine);
    
    

    //button to remove book
    const removeButton = document.createElement("button");
    removeButton.innerText = "Double-click to remove this book";
    removeButton.addEventListener("dblclick", removeBook);
    newBook.appendChild(removeButton);

    //update runningIndex by one
    runningIndex++;
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

    //display library
    displayLibrary();
}

function cancelForm() {
    submitForm.classList.remove("active");
}

const body = document.querySelector("body");
const submitForm = document.querySelector(".submit-book");
const addBook = document.querySelector(".addBook");
const cancelBook = submitForm.querySelector('input[name="cancel"]' );
const addBookButton = document.querySelector('input[name="addBook"]');
const books = document.querySelector(".books");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageNumInput = document.getElementById("pageNum");

cancelBook.addEventListener("click", cancelForm);
addBookButton.addEventListener("click", parseBookInfo );
addBook.addEventListener("click", translateForm);


