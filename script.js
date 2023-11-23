let codeContainer = document.getElementById("code")
const addBtn = document.getElementById("add-button")
const delBtn = document.getElementById("delete-button")
let units = document.getElementById("units")
let testScore = document.getElementById("test-scores")
let examScore = document.getElementById("exam-scores")
let grade = document.getElementById("grades")
let gradePoint = document.getElementById("grade-points")
let courseList = document.getElementById("course-list")
let courseListArr = []
let codeList = []
let unitsArr = []
let tScoresArr = []
let eScoresArr = []
let gradeArr = []
let gPointArr = []

addBtn.addEventListener("click", function() {
    let newCode = prompt("Enter Course Code")
    let newUnit = prompt("Enter Course Units")
    let newTestScore = prompt("Enter Test Score")
    let newExamScore = prompt("Enter Exam Score")
    codeList.push(newCode)
    unitsArr.push(newUnit)
    tScoresArr.push(newTestScore)
    eScoresArr.push(newExamScore)
    codeContainer.innerHTML = ""
    units.innerHTML = ""
    testScore.innerHTML = ""
    examScore.innerHTML = ""
    let gradePointC = 0
    let totalGradePointC = 0


    for ( i = 0; i < codeList.length; i++) {
        let li = document.createElement("li")
        li.innerText = codeList[i]
        codeContainer.appendChild(li)
        // grade.innerHTML = testScore + examScore
        // gradePoint.innerHTML = grade * units
    }
    for ( i = 0; i < unitsArr.length; i++) {
        let li = document.createElement("li")
        li.innerText = unitsArr[i]
        units.appendChild(li)
        // let gradeSum = parseInt(testScore + examScore)
        // grade.innerHTML = gradeSum
        // let gradePointCalc = parseInt(grade * units)
        // gradePoint = gradePointCalc
    }
    for ( i = 0; i < tScoresArr.length; i++) {
        let li = document.createElement("li")
        li.innerText = tScoresArr[i]
        testScore.appendChild(li)
        // grade.innerHTML = testScore + examScore
        // gradePoint.innerHTML = grade * units
    }
    for ( i = 0; i < eScoresArr.length; i++) {
        let li = document.createElement("li")
        li.innerText = eScoresArr[i]
        examScore.appendChild(li)
        // grade.innerHTML = testScore + examScore
        // gradePoint.innerHTML = grade * units
    }
    let gradeSum = parseInt(newTestScore) + parseInt(newExamScore)
    grade.innerText = gradeSum
    let gradePointProduct = parseInt(newUnit) * parseInt(gradeSum)
    gradePoint.innerText = gradePointProduct
})


// addBtn.addEventListener("click", function () {
//   let newCode = prompt("Enter Course Code")
//   let newUnit = prompt("Enter Course Units")
//   let newTestScore = prompt("Enter Test Score")
//   let newExamScore = prompt("Enter Exam Score")
// //   let newGrade = prompt("Enter Course Units")
// //   let newGradePoint = prompt("Enter Course Units")
//   codeList.push(newCode)
//   codeContainer.innerHTML = ""
//   unitsArr.push(units)
//   tScoresArr.push(newTestScore)
//   eScoresArr.push(newExamScore)

//   for (let i = 0; i < codeList.length; i++) {
//     let li = document.createElement("li");
//     li.innerText = codeList[i];
//     codeContainer.appendChild(li);
//   }
//   for (let i = 0; i < unitsArr.length; i++) {
//     let li = document.createElement("li")
//     units.textContent = newUnit
//   }
//   for (let i = 0; i < tScoresArr.length; i++) {
//     let li = document.createElement("li")
//     testScore.textContent = newTestScore
//   }
//   for (let i = 0; i < eScoresArr.length; i++) {
//     let li = document.createElement("li")
//     examScore.textContent = newExamScore
//   }
// });
// delBtn.addEventListener("click", function () {
//   console.log("clicked");
//   codeContainer.innerHTML = "";
//   codeContainer === "";
//   codeList = [];
// });
