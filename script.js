const app ={};
function createDiv(){
    for(let i=0;i<myLibrary.length;i++){
        const div = document.createElement(`div`);
    
    }
}

const myLibrary = [];

function Book(title){
    this.title = title
    this.id=crypto.randomUUID();
}

function addBookToLibrary(bookName,bookId){
    const book = new Book("Rich Dad")
    const book2 = new Book("Diary of Ana");
    myLibrary.push(book)
    myLibrary.push(book2);
}

addBookToLibrary()
function displayBook(){

for(let i=0;i<myLibrary.length;i++){

}
}
displayBook();
console.log(app[1]);