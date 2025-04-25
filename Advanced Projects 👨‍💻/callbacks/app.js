const student = {
    fullName : "Rishabh Kumar Yadav",
    Age : 22,
    Sex : "Male",
    Subject : "computer Science",
    Marks : 85,
    Rank : "Passed"
};

/*****************  callback  *********************/

let container = document.getElementById
("container");

/****************  get name  *******************/
function getStudentName(student, callback) {
    setTimeout(() => {
        let name = `Name : ${student.fullName}`;

        let p = document.createElement("p");
        p.classList.add("detail1")
        p.innerText = name;

        container.appendChild(p);

        callback(student);
    }, 500)
};

/******************  get age  ********************/
function getStudentAge(student, callback) {
    setTimeout(() => {
        let age = `Age : ${student.Age}`;

        let p = document.createElement("p");
        p.classList.add("detail2")
        p.innerText = age;

        container.appendChild(p);

        callback(student);
    }, 500)
};

/*******************  get sex  ***********************/
function getStudentSex(student, callback) {
    setTimeout(() => {
        let sex = `Sex : ${student.Sex}`;

        let p = document.createElement("p");
        p.classList.add("detail3")
        p.innerText = sex;

        container.appendChild(p);

        callback(student);
    }, 500)
};

/******************  get subject  *************************/
function getStudentSubject(student, callback) {
    setTimeout(() => {
        let subject = `Subject : ${student.Subject}`;

        let p = document.createElement("p");
        p.classList.add("detail4")
        p.innerText = subject;

        container.appendChild(p);

        callback(student);
    }, 500)
};

/************************  get marks  ************************/
function getStudentMarks(student, callback) {
    setTimeout(() => {
        let marks = `Marks : ${student.Marks}`;

        let p = document.createElement("p");
        p.classList.add("detail5")
        p.innerText = marks;

        container.appendChild(p);

       callback(student);
    }, 500)
};

/******************  get rank  ******************************/
function getStudentRank(student) {
    setTimeout(() => {
        let marks = `Rank : ${student.Rank}`;

        let p = document.createElement("p");
        p.classList.add("detail6")
        p.innerText = marks;

        container.appendChild(p);
    }, 500)
};


/*******************   view btn  ************************/
let view = document.getElementById("view");

/********************  callback hell  *********************/
view.addEventListener("click", () => {
    getStudentName(student, () =>{
        getStudentAge(student, () => {
            getStudentSex(student, () => {
                getStudentSubject(student, () => {
                    getStudentMarks(student, () => {
                        getStudentRank(student);
                    });
                });
            });
        });
    });
    
});

/*****************    report button   *********************/
let report = document.getElementById("report");

let reportcard = document.getElementById("reportcard");

report.addEventListener("click", () => {
    if(reportcard.style.display = "none") {
        reportcard.style.display = "block";
    } else {
        reportcard.style.display = "none";
    }
})

