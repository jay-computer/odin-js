let myLibrary = new Array();

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for(let key in myLibrary) {
        console.table(myLibrary[key].info());
    }
}

const book1 = new Book("title1", "author1", 23);
const book2 = new Book("title2", "author2", 53);
const book3 = new Book("title3", "author3", 93);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary();


//Query selectors and functions to move the form up and down

function translateForm() {
    
}


const addBook = document.querySelector(".addBook");
addBook.addEventListener("click", translateForm);