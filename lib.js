let library = [];

function Book(author, title, pages, beenRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.beenRead = beenRead;
}

function addBook(author, title, pages, beenRead) {
    const newBook = new Book(author, title, pages, beenRead);
}

function display (){
    for (const book of library) {
        const bookCard = document.createElement('div');

        const box = document.querySelector('#container');
        box.appendChild(bookCard);

        const author = document.createElement('div');
        author.textContent = book.author;

        const title = document.createElement('div');
        title.textContent = book.title;

        const pages = document.createElement('div');
        pages.textContent = book.pages.toString();

        const beenRead = document.createElement('div'); 
        beenRead.textContent = book.beenRead;

        bookCard.appendChild(author);
        bookCard.appendChild(title);
        bookCard.appendChild(pages);
        bookCard.appendChild(beenRead);
    }
}

addBook('a', 'b', 23, 'has been read');
display()