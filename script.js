const container = document.querySelector(`.container`);
const bookDisplay = document.querySelector(`.book-display`);
const btnAdd = document.querySelector(`.add-btn`);
const form = document.querySelector(`form`);
const submitBtn = document.querySelector(`.submit-btn`);
const myLibrary = [];
//constructer
function Book(title,author,numberOfPages){
    this.title = title
    this.id=crypto.randomUUID();
    this.author=author;
    this.numberOfPages=numberOfPages;
    this.read=false;
}
//adding to the myLibrary array
function addBookToLibrary(bookName,bookAuthor,numberOfPages){
    const book = new Book(bookName,bookAuthor,numberOfPages)
    myLibrary.push(book);
    printBook();
    
}
//display in the  screen
function printBook(){
  bookDisplay.innerHTML=""
    for(let i =0;i<myLibrary.length;i++){
        console.log(myLibrary[i]);
    const div = document.createElement("div");
        div.className="card";
        const bookTitle = document.createElement('h3');
        const bookId=document.createElement('div')
        const bookAuthor=document.createElement('div')
        const pageQuantity=document.createElement('div');
        const deleteBtn = document.createElement('button');
        bookTitle.textContent=myLibrary[i].title;
        bookId.textContent=`ID: ${myLibrary[i].id}`;
        bookAuthor.textContent=`Author : ${myLibrary[i].author}`;
        pageQuantity.textContent=`Size : ${myLibrary[i].numberOfPages}`;
        deleteBtn.textContent=`Delete`;
        deleteBtn.className=`delete-btn`;
        console.log(myLibrary[i].read);
        bookDisplay.appendChild(div);
        div.appendChild(bookTitle)
        div.appendChild(bookId)
        div.appendChild(bookAuthor)
        div.appendChild(pageQuantity);
        div.appendChild(deleteBtn);
        const readStatus = document.createElement(`button`);
        readStatus.textContent=`Read`;
       readStatus.className=`read-status`
       div.appendChild(readStatus);
       if(myLibrary[i].read==false){
          div.className=`not-read`
          readStatus.textContent=`Not Read`
      }
   
        deleteBtn.addEventListener("click", (event) => {
            const index = myLibrary.findIndex(b => b.id ===myLibrary[i].id);
            console.log(index);
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }
            printBook();
        })
        readStatus.addEventListener(`click`,()=>{
         myLibrary[i].toggleRead();
         console.log(myLibrary[i].read);
          if(myLibrary[i].read==true){
           div.className=`card`
          readStatus.textContent=`Read`;
        }else{
          div.className=`not-read`
          readStatus.textContent=`Not Read`;
        }
        })
      
    }
}

//add button
btnAdd.addEventListener(`click`,()=>{
    form.classList.toggle("active");
})
form.addEventListener(`submit`,(event)=>{
    event.preventDefault();
    const titleInput = document.querySelector(`.title`).value;
    const authorInput = document.querySelector(`.author`).value;
    const page = document.querySelector(`.number-of-pages`).value;
    // const readStatus = document.querySelector(`input[name="readStatus"]:checked`).value;
    // console.log(readStatus);
    addBookToLibrary(titleInput,authorInput,page); 
    container.appendChild(btnAdd);
    form.classList.remove("active");
    form.reset();
})
//read toggler prototype for Book 
Book.prototype.toggleRead=function(){
    this.read=!this.read;
}