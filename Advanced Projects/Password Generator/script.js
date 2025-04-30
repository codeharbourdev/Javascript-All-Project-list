let password = document.getElementById("password");
let btn = document.getElementById("btn");
let generate = document.getElementById("generate");
let refresh = document.getElementById("refresh");


function logtocontainer(message) {
    password.innerHTML += message + "<br>";
    console.log(message);
}


/*************** generate password   *********************/

let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@!$#%^&*{[}}\<>?/|" // 70 string length

let number = prompt("How many digit in a Password 👇 : ");

generate.addEventListener("click", function() {
    let Pass = "";
    
    
    for(let i = 1; i <= number; i++) {
        let randomIndex = Math.floor(Math.random() * 70);
        Pass = Pass + string[randomIndex];
    }

    logtocontainer(Pass);
})

/***************  password refresh  ***********************/

refresh.addEventListener("click", function() {
    location.reload();
})
