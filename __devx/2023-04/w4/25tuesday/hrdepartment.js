const { log } = require('console');
const fs = require('fs')

let departmentFile = fs.readFileSync('1_departments.txt', 'utf-8')

// const departmentClean = departmentFile.replace(/"/g,"")

// console.log(departmentClean);

const departmentArray = departmentFile.replace(/"/g,"").trim().split('\n')



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

// const fs = require('fs')

let employeesFile = fs.readFileSync('3_employees.txt', 'utf-8')

// console.log(employeesFile);

const employeesArray = employeesFile.replace(/"/g, "").trim().split('\n')

// console.log(employeesArray);

const employees = []

for ( i = 0; i < employeesArray.length; i++) {
const [emplId, emplDOB, emplFirstName, emplLastName, emplGender, hireDate] = employeesArray[i].split(',');
employees.push({emplId:emplId, emplDOB:emplDOB, emplFirstName:emplFirstName, emplLastName:emplLastName, emplGender:emplGender, hireDate:hireDate})

}

// console.log(employees);


// const fs = require('fs')

let employeeSalariesFile = fs.readFileSync('4_employeesalaries.txt', 'utf-8')

// console.log(employeeSalariesFile);

const employeeSalariesArray = employeeSalariesFile.replace(/"/g, "").trim().split('\n')

// console.log(employeeSalariesArray);

const employeeSalaries = []

for ( i = 0; i < employeeSalariesArray.length; i++) {
    const [emplId, salary, hireDate, activeDate] = employeeSalariesArray[i].split(',');
    employeeSalaries.push({emplId:emplId, salary:salary, hireDate:hireDate, activeDate:activeDate})
    
    }

    // console.log(employeeSalaries);










// 

// empl id, dept name

// for ( let i = 0; i < employeeDepartments.length; i++) {
//     for (let j = 0; j < departments.length; j++){
//         if (employeeDepartments[i].emplId && employeeDepartments[i].deptNo == departments[j].deptNo)
//         console.log(employeeDepartments[i].emplId, departments[j].deptName); 
//     }
// }



// console log emplID, dept name, first name, last name, salary, hiredate

// for (let i = 0; i < employeeSalaries.length; i++) {
    // for (let j = 0; j < employees.length; j++) {
        // for (let k = 0; k < employeeDepartments.length; k++) {
            // if(employeeSalaries[i].emplId == employees[j].emplId && employeeSalaries[i].activeDate == employeeDepartments[k].activeDate)
            // for (let l = 0; l < departments.length; l++) {
                // if(employees[j].emplId == employeeDepartments[k].emplId && departments[l].deptNo == employeeDepartments[k].deptNo) {
                    // console.log(employeeDepartments[k].emplId, departments[l].deptName, employees[j].emplFirstName, employees[j].emplLastName, employeeSalaries[i].salary, employeeDepartments[k].activeDate, );
                    // }
                // }
            // }
        // }
    //  }

     

     checkCurrentEmployees = () => {
        for (let i = 0; i < employees.length; i++) {
            for (let j = 0; j < employeeDepartments.length; j++) 
            if (employeeDepartments[i].activeDate === '9999-01-01' && employees[i].emplId == employeeDepartments[j].emplId) {
                console.log(employeeDepartments[j].emplId, employees[i].emplFirstName,employees[i].emplLastName)
            }
        }
     }

     checkCurrentEmployees()
    //  let totalSalary = 0
    //  const currentTotalSalary = () => {
        // for (let i = 0; i < employeeSalaries.length; i++) {
                // for(let k = 0; k < employeeDepartments.length; k++){
                    // if ( employeeDepartments[k].activeDate == '9999-01-01' && employeeSalaries[i].activeDate == '9999-01-01' &&employeeDepartments[k].emplId == employeeSalaries[i].emplId){
                    // let addedValue = parseInt(employeeSalaries[i].salary)
                    // totalSalary += addedValue;
                    // }
                // }
            // }
            // console.log(totalSalary);
        // }

    //  currentTotalSalary()
   





// let employeeFullList = [departments,employeeDepartments,employees,employeeSalaries]
 
// console.log(employeeFullList)

// for ( let i = 0
// ; i < employeeFullList.length; i++) {
//     if (employees[i].emplId == employeeSalaries[i].emplId)
//     console.log(employees[i].emplId, departments[i].deptName, employees[i].emplFirstName, employees[i].emplLastName, employeeSalaries[i].salary, employees[i].hireDate);
// }

