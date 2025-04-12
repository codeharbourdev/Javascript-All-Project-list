let hamburgur = document.querySelector(".hamburgur");

let iconname = document.getElementById("icon-name");


let theme = document.querySelector(".theme");

let container = document.querySelector(".container");


hamburgur.addEventListener("click", function() {
    if(iconname.style.display === "flex") {
        iconname.style.display = "none";
        hamburgur.classList.remove("fa-bars");
        hamburgur.classList.add("fa-xmark");
    } else {
        iconname.style.display = "flex";
        hamburgur.classList.remove("fa-xmark");
        hamburgur.classList.add("fa-bars");
    }
})


theme.addEventListener("click", function() {
    if(container.classList.contains("light")) {
        container.classList.remove("light");
        container.classList.add("dark");
        theme.classList.remove("fa-sun");
        theme.classList.add("fa-moon");
    } else {
        container.classList.remove("dark");
        container.classList.add("light");
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
    }
})

