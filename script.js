//////////////////////// STUDETNS RESULT PORTAL //////////////////////

// STUDENTS DATA ARRAY
let studentsData = [
  {
    studentName: 'Ali',
    marks: 130,
  },
  {
    studentName: 'john',
    marks: 223,
  },
  {
    studentName: 'mark',
    marks: 293,
  },
  {
    studentName: 'alex',
    marks: 193,
  },
  {
    studentName: 'wood',
    marks: 123,
  },
  {
    studentName: 'jeff',
    marks: 673,
  },
  {
    studentName: 'maxwell',
    marks: 300,
  },
];

//  ON SUBMIT FUNCTION

function findMarks() {
  let applicantName = document.getElementById('applicantName').value;
  let nameFound = false;
  let studentName = document.getElementById('studentName');
  let studentMarks = document.getElementById('studentMarks');
  let studentGrades = document.getElementById('studentGrades');
  // ERROR MESSAGE
  let errMessage = document.getElementById('error_message');
  for (let result of studentsData) {
    if (result.studentName === applicantName) {
      nameFound = true;
      studentName.textContent = `Student Name : ${result.studentName}`;
      studentMarks.textContent = `Marks : ${result.marks}`;
      studentMarks.classList.add('resultMessage');
      studentName.classList.add('resultMessage');
      studentGrades.classList.add('resultMessage');
      // let totalMarks = 300;
      if (result.marks <= 100) {
        studentMarks.textContent = 'D Grade';
      } else if (result.marks <= 150) {
        studentGrades.textContent = 'c Grade';
      } else if (result.marks <= 200) {
        studentGrades.textContent = 'B Grade';
      } else if (result.marks <= 250) {
        studentGrades.textContent = 'B+ Grade';
      } else if (result.marks <= 300) {
        studentGrades.textContent = 'A1 Grade';
      } else if (result.marks > 300) {
        studentMarks.textContent = 'invalid marks';
        studentGrades.textContent = 'Can not assign Grades';
      }
      break;
    }
  }
  if (nameFound === false) {
    errMessage.textContent = `${applicantName} Not Found`;
    studentMarks.textContent = '';
    studentGrades.textContent = '';
    studentName.textContent = '';
    studentMarks.classList = null;
    studentName.classList = null;
    studentGrades.classList = null;
  } else if (nameFound === true) {
    errMessage.textContent = '';
  }
  // EMPTY OUT THE INPUT FIELDS AFTER THE FORM SUBMISSION
}

// GET THE STUDENTS LIST

let studentsList = document.getElementById('students_list');
for (let getStudentName of studentsData) {
  let items = document.getElementById('itmes');
  let para = document.createElement('p');
  para.classList.add('studentsList');
  para.textContent = `Student Names to Search :  ${getStudentName.studentName}`;

  items.appendChild(para);
}
