let brackets = document.querySelectorAll(".bracket");

brackets.forEach(bracket => {
    let ques = bracket.querySelector(".ques");
    let ans = bracket.querySelector(".ans");
    let icons = bracket.querySelector(".icon");


    ques.addEventListener("click", function() {
        bracket.classList.toggle("active");
        icons.classList.toggle("fa-plus");
        icons.classList.toggle("fa-minus");
    })
})

