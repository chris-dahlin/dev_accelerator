// 2_employeedepartment.txt

const fs = require('fs')

let employeeDepartmentFile = fs.readFileSync('2_employeedepartment.txt', 'utf-8')

// console.log(employeeDepartmentFile);

const employeeDepartmentArray = employeeDepartmentFile.replace(/"/g,"").trim().split('\n')

// console.log(employeeDepartmentArray);

const employeeDepartments = []

for( i = 0; i < employeeDepartmentArray.length; i++) {

    const [emplId, deptNo, hireDate, activeDate] = employeeDepartmentArray[i].split(',');
    employeeDepartments.push({ emplId: emplId, deptNo: deptNo, hireDate: hireDate, activeDate: activeDate})
}

console.log(employeeDepartments);

