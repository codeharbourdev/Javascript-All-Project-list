let email = document.getElementById("email");
let emailpara = document.getElementById("emailpara");
let fullname = document.getElementById("name");
let namepara = document.getElementById("namepara");
let textarea = document.getElementById("textarea");
let textareapara = document.getElementById("textareapara");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");


btn1.addEventListener("click", function() {
    location.reload();
})

function formSubmit() {
    if(email.value === "") {
        emailpara.style.display = "block";
    } else if (fullname.value === "") {
        namepara.style.display = "Block";
    } else if (textarea.value === "") {
        textareapara.style.display = "block";
    } else {
        alert("Thank you for Submit Form 👍")
    }
}

btn.addEventListener("click", formSubmit);

