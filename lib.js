let library = [];

function Book(author, title, pages, beenRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.beenRead = beenRead;
}

function addBook (book) {
    library.push(book);
}