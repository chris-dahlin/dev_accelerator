// 3_employees.txt

const fs = require('fs')

let employeesFile = fs.readFileSync('3_employees.txt', 'utf-8')

// console.log(employeesFile);

const employeesArray = employeesFile.replace(/"/g, "").trim().split('\n')

// console.log(employeesArray);

const employees = []

for ( i = 0; i < employeesArray.length; i++) {
const [emplId, emplDOB, emplFirstName, emplLastName, emplGender, hireDate] = employeesArray[i].split(',');
employees.push({emplId:emplId, emplDOB:emplDOB, emplFirstName:emplFirstName, emplLastName:emplLastName, emplGender:emplGender, hireDate:hireDate})

}

console.log(employees);