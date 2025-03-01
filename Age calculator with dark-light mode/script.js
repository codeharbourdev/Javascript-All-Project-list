let btn1 = document.getElementById("btn1");
let year = document.getElementById("year");
let showAge = document.getElementById("showAge");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let body = document.querySelector("body");
let dark = document.getElementsByClassName("dark");
let light = document.getElementsByClassName("light");



btn3.addEventListener("click", function() {
    location.reload();
})


let presentYear = 2025;
let realAge = "";

function calculateAge() {
    realAge = presentYear - year.value;

   if(realAge < 18) {
    showAge.innerText = realAge + " years old 🥷";
   } else if (realAge > 25) {
    showAge.innerText = realAge + " years old 👨‍💻 🤷‍♀️";
   } else {
    showAge.innerText = realAge + " years old 🤦‍♂️";
   }
}

btn2.addEventListener("click", calculateAge);

/*******************   light & dark mode   ***********************/

let currentmode = "light";

function darkLighttheme() {
    if (currentmode === "light") {
        body.classList.add("dark");
        body.classList.remove("light");
        currentmode = "dark";
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
        currentmode = "light";
    }
}


btn1.addEventListener("click", darkLighttheme);