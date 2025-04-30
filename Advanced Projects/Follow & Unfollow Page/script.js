let lis = document.querySelectorAll(".li");

lis.forEach(li => {
    let btn = li.querySelector(".btn");

    btn.addEventListener("click", function() {
        if (btn.classList.contains("blue")) {
            btn.classList.remove("blue");
            btn.classList.add("grey");
            btn.innerText = "Following";
        } else {
            btn.classList.remove("grey");
            btn.classList.add("blue");
            btn.innerText = "Follow";
        }
    })
})
