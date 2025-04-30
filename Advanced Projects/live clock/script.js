
setInterval(() => {
    let container = document.getElementById("container");

    let date = new Date();

    let hourTime = date.getHours();
    let hour = hourTime % 12;

    let min = date.getMinutes();

    let sec = date.getSeconds();

    let time = `${hour} hr : ${min} min : ${sec} sec`;
    container.innerText = time;
}, 1000);

