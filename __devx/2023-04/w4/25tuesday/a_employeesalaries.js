// 4_employeesalaries.txt

const fs = require('fs')

let employeeSalariesFile = fs.readFileSync('4_employeesalaries.txt', 'utf-8')

// console.log(employeeSalariesFile);

const employeeSalariesArray = employeeSalariesFile.replace(/"/g, "").trim().split('\n')

// console.log(employeeSalariesArray);

const employeeSalaries = []

for ( i = 0; i < employeeSalariesArray.length; i++) {
    const [emplId, salary, hireDate, activeDate] = employeeSalariesArray[i].split(',');
    employeeSalaries.push({emplId:emplId, salary:salary, hireDate:hireDate, activeDate:activeDate})
    
    }

    console.log(employeeSalaries);