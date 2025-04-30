/*******************   call attribute and tag  ********************/
let btn = document.getElementById("btn");



btn.addEventListener("click", () => {
    // Fetching values inside the click event so you get the latest input values
    let name = document.getElementById("nameInput");
    let age = document.getElementById("ageInput");
    let email = document.getElementById("emailInput");
    let number = document.getElementById("numberInput");
    let ad = document.getElementById("adInput");


    let nameInput = name.value;
    let ageInput = age.value;
    let emailInput = email.value;
    let numberInput = number.value;
    let adInput = ad.value;


    let data1 = nameInput; 
    let data2 = ageInput;
    let data3 = emailInput;
    let data4 = numberInput;
    let data5 = adInput;


    /**************  create element  ****************/
    let reportbox = document.getElementById("report-box");
    let div = document.createElement("div");
    div.classList.add("report");
    reportbox.appendChild(div);


    /****************  promise logic  ************/
    function getData(dataId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                div.innerHTML += dataId + "<br>" + "<br>";
                resolve("success");
            }, 1000);
        });
    };


    let para = document.getElementById("getting");

    para.innerText = "getting data 1 ...............";
    getData(`Name : ${data1}`).then((res1) => {
        para.innerText = "getting data 2 ...............";
        return getData(`Age : ${data2}`);
    }).then((res2) => {
        para.innerText = "getting data 3 ...............";
        return getData(`Email : ${data3}`);
    }).then((res3) => {
        para.innerText = "getting data 4 ...............";
        return getData(`Phone : ${data4}`);
    }).then((res4) => {
        para.innerText = "getting data 5 ...............";
        return getData(`Address : ${data5}`);
    }).then((res5) => {
        para.innerText = "All data fetched successfully!";
        setTimeout(() => {
            alert("Successfully Data Fetch 👍");
        }, 0); 
    }).catch((err) => {
        console.log(err);
    });


    
    name.value = "";
    age.value = "";
    email.value = "";
    number.value = "";
    ad.value = "";
});
