let left = document.getElementById("left");
let right = document.getElementById("right");
let slider = document.querySelector(".slider");

let scrollAmount = 500;

// Left button click - Scroll left
left.addEventListener("click", function () { 
    slider.scrollLeft -= scrollAmount;
});

// Right button click - Scroll right
right.addEventListener("click", function () {
    slider.scrollLeft += scrollAmount;
});
