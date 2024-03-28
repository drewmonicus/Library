const modal = document.querySelector('.modal');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() { //3
    let title = document.querySelector("#title").value;    
    let author = document.querySelector("#author").value;    
    let pages = document.querySelector("#pages").value;    
    let read = document.querySelector("#read").checked;    
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();

}

let newBookbtn = document.querySelector("#new-book-btn");  

newBookbtn.addEventListener("click", function(){   //1, SHOW MODAL
    modal.showModal();   
})



document.querySelector("#modal").addEventListener("submit", function(event){ //2 `xx
    addBookToLibrary();  
    modal.close();
    event.preventDefault(); // *IMPORTAANT, see Project Description*

})

function render() { //4
    let libraryEl = document.querySelector(".library");
    libraryEl.innerHTML = ""; // clear innerHTML so no dupes
    for (i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        let book = myLibrary[i]
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `
            <div class = "bookCard">
                <div class = "title">${book.title}</div>
                <div class = "author"> by ${book.author}</div>
                <div class = "pages">${book.pages}</div>
                <button class = "readStatus">${book.read}</div>
            </div>
            `;
        libraryEl.append(bookEl);
    }
}
