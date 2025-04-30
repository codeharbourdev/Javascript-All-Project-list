/**********************   sidebar  show & hide   *******************/

let sidebar = document.getElementById("sidebar");
let showbar = document.getElementById("showbar");
let hidebar = document.getElementById("hidebar");


showbar.addEventListener("click", function() {
    sidebar.style.display = "block";
});

hidebar.addEventListener("click", function() {
    sidebar.style.display = "none";
});