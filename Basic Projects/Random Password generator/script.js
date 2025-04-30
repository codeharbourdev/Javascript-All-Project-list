let input = document.querySelector("input");
let passwordbox = document.getElementById("password-box");
let btn1 = document.getElementById("btn1");


/*********************  generate password   ********************/
let upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
let symbol = "!@#$%^&*()_{}|\:?/><,.~`";
let number = "1234567890";

let char = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234569870!@#$%^&*()_{}|\:?/><,.~`";

function randomGenerate() {
    let password = "";

    for(let i = 0; i < input.value; i++) {
        let pass = Math.floor(Math.random() * char.length);

        password += char[pass];
    }

    return password;
}

btn1.addEventListener("click", () => {
    let newpass = randomGenerate();
    passwordbox.innerText = newpass; 
})


/***************************  password generator   *********************/
let btn2 = document.getElementById("btn2");
let strengthbox = document.getElementById("strength-box");
let imgbox = document.getElementById("img-box");
let imgtext = document.getElementById("img-text");

btn2.addEventListener("click", function() {
    if(input.value < 8) {
        imgtext.innerText = "Your Password easy";
        imgbox.innerHTML = '<img src="weak.png" alt="weak">';
        strengthbox.style.display = "flex";
    } else if (input.value >= 8 && input.value <= 10) {
        imgtext.innerText = "Your Password medium";
        imgbox.innerHTML = '<img src="medium.png" alt="medium">'; 
        strengthbox.style.display = "flex";
    } else {
        imgtext.innerText = "Your Password strong";
        imgbox.innerHTML = '<img src="strong.png" alt="strong">';
        strengthbox.style.display = "flex";
    }
})

btn2.addEventListener("dblclick", function() {
    location.reload();
})


