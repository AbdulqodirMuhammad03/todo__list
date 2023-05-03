let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elList = document.querySelector(".js-list");
let elTodoTemplate = document.querySelector ('.todo-template').content
console.log (elTodoTemplate)
let allTodo = [];

let onDelete = (evt) => {
    let arr = []
    allTodo.forEach ((todo) => {
        if (todo.id !== evt.target.dataset.id - 0 ) {
            arr.push (todo)
        }
    })
  console.log(evt.target.dataset.id);
  allTodo = arr
  onRender (arr)
};
let onEdit = (evt) => {
    console.log (evt.target.dataset.id)
    prompt (elInput.value)
}

let onRender = (arr) => {
  elList.innerHTML = null;
  arr.forEach((item) => {
    let elTodo = elTodoTemplate.cloneNode(true);
    elTodo.querySelector ('.todo-text').textContent = item.text
    
    let btnDelete = elTodo.querySelector ('.btn-delete');
    btnDelete.dataset.id = item.id ;

    let btnEdit = elTodo.querySelector ('.btn-edit');
    btnEdit.dataset.id = item.id ;
    btnDelete.addEventListener ('click',onDelete);
    btnEdit.addEventListener ('click',onEdit);
    
    elList.appendChild(elTodo);
  })
};

let onSubmit = (evt) => {
  evt.preventDefault();
  let inputValue = elInput.value.trim();
  elInput.value = null;

  let newTodo = {
    id: allTodo.length + 1,
    text: inputValue,
    isCompleted: false,
  };
  allTodo.unshift(newTodo);
  onRender(allTodo);
};

elForm.addEventListener("submit", onSubmit);
