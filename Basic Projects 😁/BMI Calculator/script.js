let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let showbmi = document.getElementById("showbmi");
let refresh = document.querySelector("#refresh");
let btn = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");


/************************   page refresh   *****************/
refresh.addEventListener("click", function() {
    location.reload();
})



/***********************  calculate bmi   *******************/
function calculateBmi() {
    let heightmeter = height.value/100;
    let bmi =  weight.value/(heightmeter*heightmeter);
    showbmi.innerText = Math.round(bmi);

    /******************   health advice    ***********************/

    let healthcontent = document.querySelector("#health-content");

    btn1.addEventListener("click", function() {
        if(bmi <= 19) {
             healthcontent.innerText = "High-calorie foods lein & Strength training karein muscle gain ke liye.🥷";
        } else if (bmi >= 19 && bmi <= 25) {
            healthcontent.innerText = "Balanced diet follow karein & Hydration aur sleep ko maintain karein.🤷‍♀️";
        } else if (bmi >= 25 && bmi <= 29) {
            healthcontent.innerText = "Processed aur junk food avoid karein & Daily calorie intake track karein.🫤";
        } else {
            healthcontent.innerText = "Weight loss ke liye proper diet aur workout plan follow karein &  Sugar aur unhealthy fats avoid karein.🫵";   
        }
    })
}

btn.addEventListener("click", calculateBmi)


/*************************  health note   *********************/
let healthnote = document.getElementById("health-note");

btn1.addEventListener("click", function() {
    if(healthnote.style.display === "none") {
        healthnote.style.display = "block";
    } else {
        healthnote.style.display = "none";
    }
})