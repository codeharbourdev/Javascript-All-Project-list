let input = document.querySelector("input");
let eye = document.getElementById("eye");
let textarea = document.getElementById("textarea");


/************************  hide and show password    *****************/
eye.addEventListener("click", function() {
    if(input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }

    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
})

/*************************   paswoerd copy  and  paste  ************************/
input.addEventListener("copy", function() {
    alert("Your Password Copied 🫵");
})

textarea.addEventListener("paste", function() {
    alert("Your Password Pasted it 👍")
})