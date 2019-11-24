const toDoForm = document.querySelector(".toDo-form");
const toDoList = document.querySelector(".toDo-list");
const toDoInput = document.querySelector(".toDo-input");

let toDo = [];



function saveToDoList(){
    localStorage.setItem("toDoList", JSON.stringify(toDo));
}

function printToDoList(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const newIndex = toDo.length+1;

    span.innerText = text;
    button.innerText = "X";
    button.addEventListener("click", handleCloseBtn);
    li.appendChild(span);
    li.appendChild(button);
    li.setAttribute("id", newIndex);
    toDoList.appendChild(li);

    const todoObj = {
        index : newIndex,
        content : text
    }

    toDo.push(todoObj);
    saveToDoList();
}

function loadToDoList(){
    const loadedToDoList = JSON.parse(localStorage.getItem("toDoList")); // toDo 문자열 형태를 객체로 받아옴

    if(loadedToDoList !== null){ // 할 일 리스트가 비어있지 않다면?
        loadedToDoList.forEach(function(toDo){
            printToDoList(toDo.content);
        });
    }
}

function handleCloseBtn(event){
    const targetNode = event.target.parentNode;
    const targetId = targetNode.id;
    toDoList.removeChild(targetNode);
    const cleanTodoList = toDo.filter(function(element){
        return element.index !== parseInt(targetId);
    });
    toDo = cleanTodoList;
    saveToDoList();
}

function handleToDoSubmit(event){
    event.preventDefault();
    printToDoList(toDoInput.value);
    toDoInput.value = '';
}

function init(){
    const name = localStorage.getItem(USER_NM_LS);
    if(name === null)
        toDoForm.classList.add(DISPLAY_NONE);

    toDoForm.addEventListener("submit", handleToDoSubmit);
    loadToDoList();
}

init();