let students = []; // Global array

/*********************   management start  ******************/
class Student {
    constructor(name, rollno, marks, aim) {
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
        this.aim = aim;
    }

    /*******************  grade system  ********************/
    get grade() {
        let m = this.marks;
        if (m >= 90) return "A+";
        else if (m >= 80) return "A";
        else if (m >= 70) return "B";
        else if (m >= 60) return "C";
        else if (m >= 50) return "D";
        else return "F";
    }

    /*********************  method show detail  *********************/
    showDetail() {
        return(`Student Name : ${this.name}
        Roll No : ${this.rollno}
        Marks : ${this.marks}
        Aim : ${this.aim}
        Grade : ${this.grade}`);
    }
}


/*******************  function *******************************/
function submitClick() {
    /*****************  call html attribute  *********************/
    let inputname = document.getElementById("inputname");
    let rollinput = document.getElementById("rollinput");
    let markinput = document.getElementById("markinput");
    let aiminput = document.getElementById("aiminput");

    nameValue = inputname.value;
    rollValue = rollinput.value;
    marksValue = markinput.value;
    aimValue = aiminput.value;

    /*********************  alert   **********************/
    if (
        inputname.value.trim() === "" ||
        rollinput.value.trim() === "" ||
        markinput.value.trim() === "" ||
        aiminput.value.trim() === ""
    ) {
        alert("Please fill all fields!");
    }

    /****************** create obj  **********************/
    let obj = new Student(nameValue, rollValue, marksValue, aimValue);
    students.push(obj); // ← ye student list me add hoga

    /****************  create new disply  div element  ************************/
    let contentbox = document.getElementById("content-box");
    let div = document.createElement("div");
    contentbox.appendChild(div);

    /**************  diaplay content show  *****************/
    div.innerText = obj.showDetail();

    /*************** create delete button  *********************/
    let delbtn = document.createElement("button");
    delbtn.innerText = "Remove";
    div.appendChild(delbtn);

    delbtn.addEventListener("click", () => {
       div.remove();
    })

    /**********************   input clear  ************************/
    let form = document.querySelector("form").reset();
}

/**********************   submit button  ***********************/
let submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", submitClick);

/************* Total Button Functionality *************/
let totalbtn = document.getElementById("totalbtn");
let totalcontent = document.getElementById("total-content");

totalbtn.addEventListener("click", () => {
    totalcontent.style.display = "flex";
    totalcontent.innerText = `Total Students: ${students.length}`;
});






