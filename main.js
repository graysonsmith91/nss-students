/*
    createStudent() should return a new student object. The name of the 
    student, and which grade the student is in, must be passed to the 
    function as arguments. The returned object should have a name 
    property and a grade property.
*/

const createStudent = (name, grade) => {
    const studentObject = {
        name: name,
        grade: grade
    }
    return studentObject
}



/*
    addMathGrade() should add a new "math" property to the student with 
    a value of "B".
*/

const addMathGrade = (studentObject) => {
    studentObject.math = "B"
    return studentObject
}



/*
    addHistoryGrade() should add a new "history" property to the student 
    with a value of "C".
*/

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"
    return studentObject
}



/*
    addScienceGrade() should add a new "science" property to the student 
    with a value of "A".
*/

const addScienceGrade = (studentObject) => {
    studentObject.science = "A"
    return studentObject
}


const newStudent = createStudent("Grayson", 12)
console.log(newStudent)

const studentMathGrade = addMathGrade(newStudent)
console.log(studentMathGrade)

const studentHistoryGrade = addHistoryGrade(studentMathGrade)
console.log(studentHistoryGrade)

const studentScienceGrade = addScienceGrade(studentHistoryGrade)
console.log(studentScienceGrade)