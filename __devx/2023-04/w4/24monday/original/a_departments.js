// 1_departments.txt

const fs = require('fs')

let departmentFile = fs.readFileSync('1_departments.txt', 'utf-8')

// const departmentClean = departmentFile.replace(/"/g,"")

// console.log(departmentClean);

const departmentArray = departmentFile.replace(/"/g,"").trim().split('\n')



// console.log(departmentArray);

const departments = []

for (let i = 0; i < departmentArray.length; i++) {

    const [deptNo, deptName] = departmentArray[i].split(',');

    departments.push({ deptNo: deptNo, deptName: deptName });

}

 console.log(departments);
