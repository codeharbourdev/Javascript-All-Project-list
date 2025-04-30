/*******************  call the attribute  *****************/
let sun = document.getElementById("sun");
let para = document.getElementById("para");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let todocontent = document.getElementById("todo-content");


/**********************  show todo   ***************/
function showTodo() {
    let inputValue = input.value;

    /****************   create element li ******************/
    let li = document.createElement("li");
    li.innerText = inputValue;
    li.classList.add("todo-list");


    /*************  create element buttun remove  ***************/
    let div = document.createElement("div");
    div.innerText = "Remove";
    li.appendChild(div);

    /***************  delete listeners  ******************/
    div.addEventListener("click", () => {
        li.remove();
    })

    todocontent.appendChild(li);
}


/*****************   add buttun listeners  *********************/
btn.addEventListener("click", () => {
    showTodo();
    input.value = "";
})

/******************  dark and light mode  *************/

sun.addEventListener("click", () => {
    let body = document.body;
    if(body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        para.innerText = "Dark";
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        para.innerText = "Light";
    }
})

      
