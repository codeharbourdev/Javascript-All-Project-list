let container = document.getElementById("container");

let btn = document.getElementById("btn");

let interval = setInterval(() => {
  container.innerText++
}, 1000); 

btn.addEventListener("click", () => {
    setTimeout(() => {
        clearInterval(interval);
    },500);
})

