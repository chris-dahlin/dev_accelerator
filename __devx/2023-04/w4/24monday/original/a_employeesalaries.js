const fs = require('fs')

let employeeSalariesFile = fs.readFileSync('4_employeesalaries.txt', 'utf-8')

console.log(employeeSalariesFile);