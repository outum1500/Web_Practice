const greetingMsg = document.querySelector(".greeting-msg");
const greetingForm = document.querySelector(".greeting-form");
const greetingInput = document.querySelector(".greeting-input");
const USER_NM_LS = 'name';
const DISPLAY_NONE = 'display-none';

function displayToDoForm(){
    toDoForm.classList.remove(DISPLAY_NONE);
}

function setGreeting(text){
    localStorage.setItem('name', text);
}

function printGreeting(text){
    greetingMsg.innerText = `Good afternoon, ${text}`;
    greetingInput.classList.add(DISPLAY_NONE);
}

function getGreeting(){
    const name = localStorage.getItem(USER_NM_LS);
    if(name !== null){
        printGreeting(name);
    }
}
function handleSubmit(event){
    const name = greetingInput.value;
    event.preventDefault();
    printGreeting(name);
    setGreeting(name);
    displayToDoForm();
}

function init(){
    getGreeting();
    greetingForm.addEventListener("submit", handleSubmit);
}

init();