console.log("script loaded");
let codeContainer = document.getElementById("code");
const addBtn = document.getElementById("add-button");
const delBtn = document.getElementById("delete-button");
let unitsObtable = document.getElementById("units");
let testScore = document.getElementById("test-scores");
let examScore = document.getElementById("exam-scores");
let grade = document.getElementById("grades");
let gradeA = document.getElementById("grades-a");
let gradePoint = document.getElementById("grade-points");
let courseList = document.getElementById("course-list");
let courseGrades = document.getElementById("course-grades");
let unitsGotten = document.getElementById("units-gotten");
let gpa = document.getElementById("course-grade-points");
let courseListArr = [];
let codeList = [];
let unitsObtableArr = [];
let tScoresArr = [];
let eScoresArr = [];
let gradeArr = [];
let gPointArr = [];
let gpaArr = [];
let unitsGottenArr = [];

addBtn.addEventListener("click", function () {
  let newCode = prompt("Enter Course Code");
  let newUnit = prompt("Enter Course Units");
  let newTestScore = prompt("Enter Test Score");
  let newExamScore = prompt("Enter Exam Score");
  // let newUnits = unitsGottenArr.push

  // let realUnit = unitN
  codeList.push(newCode);
  unitsObtableArr.push(newUnit);
  tScoresArr.push(newTestScore);
  eScoresArr.push(newExamScore);
  codeContainer.innerHTML = "";
  unitsObtable.innerHTML = "";
  testScore.innerHTML = "";
  examScore.innerHTML = "";
  grade.innerHTML = ""
  
  let gradePointC = 0;
  let totalGradePointC = 0;
  let gradeSum = parseInt(newTestScore) + parseInt(newExamScore);
  // grade.innerText = gradeSum;

  for (i = 0; i < codeList.length; i++) {
    let li = document.createElement("li");
    li.innerText = codeList[i];
    codeContainer.appendChild(li);
    // grade.innerHTML = testScore + examScore
    // gradePoint.innerHTML = grade * units
  }
  for (i = 0; i < unitsObtableArr.length; i++) {
    let li = document.createElement("li");
    li.innerText = unitsObtableArr[i];
    units.appendChild(li);
    // let gradeSum = parseInt(testScore + examScore)
    // grade.innerHTML = gradeSum
    // let gradePointCalc = parseInt(grade * units)
    // gradePoint = gradePointCalc
  }
  for (i = 0; i < tScoresArr.length; i++) {
    let li = document.createElement("li");
    li.innerText = tScoresArr[i];
    testScore.appendChild(li);
    // grade.innerHTML = testScore + examScore
    // gradePoint.innerHTML = grade * units
  }
  for (i = 0; i < eScoresArr.length; i++) {
    let li = document.createElement("li");
    li.innerText = eScoresArr[i];
    examScore.appendChild(li);
    
    if (gradeSum <= 40) {
      gradeA.innerText = "D";
      console.log("damn!");
    } else if (gradeSum >= 41 && gradeSum <= 59) {
      gradeA.innerText = "C";
      console.log("average");
    } else if (gradeSum >= 60 && gradeSum <= 69) {
      gradeA.innerText = "B";
      console.log("Not bad");
    } else if (gradeSum >= 70 && gradeSum <= 100) {
      gradeA.innerText = "A";
      console.log("Excellente");
    } 
    gradeArr.push(gradeSum);

    let liGrade = document.createElement("li");
    liGrade.innerText = gradeArr[i];
    grade.appendChild(liGrade);
  }

});
