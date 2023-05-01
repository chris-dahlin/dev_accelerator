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

//  console.log(departments);

//  const fs = require('fs')

let employeeDepartmentFile = fs.readFileSync('2_employeedepartment.txt', 'utf-8')

// console.log(employeeDepartmentFile);

const employeeDepartmentArray = employeeDepartmentFile.replace(/"/g,"").trim().split('\n')

// console.log(employeeDepartmentArray);

const employeeDepartments = []

for( i = 0; i < employeeDepartmentArray.length; i++) {

    const [emplId, deptNo, hireDate, activeDate] = employeeDepartmentArray[i].split(',');
    employeeDepartments.push({ emplId: emplId, deptNo: deptNo, hireDate: hireDate, activeDate: activeDate})
}

// console.log(employeeDepartments);

// 

// log the employeeid, hiredate, departmentname, departmentnumber

// dept id, dept name

for ( let i = 0; i < employeeDepartments.length; i++) {
    for (let j = 0; j < departments.length; j++){
        if (employeeDepartments[i].emplId && employeeDepartments[i].deptNo == departments[j].deptNo)
        console.log(employeeDepartments[i].emplId, departments[j].deptName); 
    }
}



// console log emplID, dept name, first name, last name, salary, hiredate