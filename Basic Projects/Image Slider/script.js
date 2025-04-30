let left = document.getElementById("left");
let right = document.getElementById("right");
let slide = document.querySelector(".slide");

let scrollAmount = 500;

left.addEventListener("click", function() {
    slide.scrollLeft -= scrollAmount;
})

right.addEventListener("click", function() {
    slide.scrollLeft += scrollAmount;
})

