let inputvalue = document.getElementById("userinput");
let ans = document.getElementById("ans");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


/*****************  refresh page   ****************/
btn1.addEventListener("click", function() {
    location.reload();
})



/*****************  reverse name  ******************/
let fullName = "";

function reverseName() {
    for (let i = inputvalue.value.length -1; i >= 0; i--) {
        fullName += inputvalue.value[i];
    }
    ans.innerText = fullName;
}

btn2.addEventListener("click", reverseName);


/*******************  check vowel  ******************/
let vowelName = "";

function checkVowel() {
    for (let char of inputvalue.value) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            
            vowelName += char;
        }
    }

    ans.innerText = vowelName;
}

btn3.addEventListener("click", checkVowel);



