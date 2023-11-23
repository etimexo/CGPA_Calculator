let codeContainer = document.getElementById("code");
const addBtn = document.getElementById("add-button");
const delBtn = document.getElementById("delete-button");
let units = document.getElementById("units");
let testScore = document.getElementById("test-scores");
let examScore = document.getElementById("exam-scores");
let grade = document.getElementById("grades");
let gradePoint = document.getElementById("grade-points");
let courseList = document.getElementById("course-list");
let unitsGotten = document.getElementById("units-gotten");
let gpa = document.getElementById("course-grade-points");
let courseListArr = [];
let codeList = [];
let unitsArr = [];
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
  let newUnits = unitsGottenArr.push

  // let realUnit = unitN
  codeList.push(newCode);
  unitsArr.push(newUnit);
  tScoresArr.push(newTestScore);
  eScoresArr.push(newExamScore);
  codeContainer.innerHTML = "";
  units.innerHTML = "";
  testScore.innerHTML = "";
  examScore.innerHTML = "";
  let gradePointC = 0;
  let totalGradePointC = 0;

  for (i = 0; i < codeList.length; i++) {
    let li = document.createElement("li");
    li.innerText = codeList[i];
    codeContainer.appendChild(li);
    // grade.innerHTML = testScore + examScore
    // gradePoint.innerHTML = grade * units
  }
  for (i = 0; i < unitsArr.length; i++) {
    let li = document.createElement("li");
    li.innerText = unitsArr[i];
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
  }

  let gradeSum = parseInt(newTestScore) + parseInt(newExamScore);
  grade.innerText = gradeSum;
  for ( i = 0; i < unitsGottenArr.length; i++) {
    if (gradeSum <= 40) {
        let unitValue = 1
        unitsGottenArr.push(unitValue)
        unitsGotten.innerText = unitsGottenArr[i];
        
        console.log("damn!");
      } else if (gradeSum >= 41 && gradeSum <= 59) {
        unitsGotten.innerText = 2;
        unitsGottenArr.push(2)
        console.log("average");
      } else if (gradeSum >= 60 && gradeSum <= 69) {
        unitsGotten.innerText = 3;
        console.log("Not bad");
      } else if (gradeSum >= 70 && gradeSum <= 100) {
        unitsGotten.innerText = 4;
        console.log("Excellente");
      }
  }
  
  grade.innerText = gradeSum
})

