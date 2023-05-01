const express = require('express');
const fs = require('fs');
const app = express();

app.get('/departments', (req, res) => {
    try {
      const departmentData = JSON.parse(JSON.stringify(fs.readFileSync('./1_departments.txt', 'utf8')))
      const departmentDataSplit = departmentData.split()
    res.send(departmentDataSplit)
    console.log();
    } catch (err) {
      console.error(err);
      return res.status(500).send('Error: could not read file');
    }
  });


app.get('/employee_department', (req, res) => {
    try {
      const employeeDepartment = JSON.parse(JSON.stringify(fs.readFileSync('./2_employeedepartment.txt', 'utf8')))
    res.send(employeeDepartment)
    console.log();
    } catch (err) {
      console.error(err);
      return res.status(500).send('Error: could not read file');
    }
  });

app.get('/employees', (req, res) => {
    try {
      const employees = JSON.parse(JSON.stringify(fs.readFileSync('./3_employees.txt', 'utf8')))
    res.send(employees)
    console.log();
    } catch (err) {
      console.error(err);
      return res.status(500).send('Error: could not read file');
    }
  });

app.get('/employee_salaries', (req, res) => {
    try {
      const employeeSalaries = JSON.parse(JSON.stringify(fs.readFileSync('./4_employeesalaries.txt', 'utf8')))
    res.send(employeeSalaries)
    console.log();
    } catch (err) {
      console.error(err);
      return res.status(500).send('Error: could not read file');
    }
  });
  
  
app.listen(3000, () => console.log('Server running on port 3000'));

