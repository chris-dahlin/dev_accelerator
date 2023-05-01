const express = require('express');
const fs = require('fs');
const app = express();

// Read the employee data from the text file
const data = fs.readFileSync('./3_employees.txt', 'utf8');

// Split the data into individual lines
const lines = data.trim().split('\n');

// Map each line to an object
const employees = lines.map(line => {
  const [employeeNumber, birthDate, firstName, lastName, sex, hireDate] = line.split(',');
  return {
    employeeNumber,
    birthDate,
    firstName,
    lastName,
    sex,
    hireDate
  };
});



// Write the array of objects to the companyinfo.js file
// fs.writeFileSync('./companyinfo.js', `module.exports = ${JSON.stringify(employees)};`);

app.get('/sort', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to display the employee information in a table
app.get('/', (req, res) => {
  let html = '<table><tr><th>Employee Number</th><th>DOB</th><th>First Name</th><th>Last Name</th><th>Sex</th><th>Hire Date</th></tr>';

  employees.forEach((employee) => {
    html += `<tr><td>${employee.employeeNumber}</td><td>${employee.birthDate}</td><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.sex}</td><td>${employee.hireDate}</td></tr>`;
  });

  html += '</table>';

  res.send(html);
});

// Route to sort the employee information by employee number
app.get('/sort/employeeNumber', (req, res) => {
  employees.sort((a, b) => {
    return a.employeeNumber - b.employeeNumber;
  });

  let html = '<table><tr><th>Employee Number</th><th>DOB</th><th>First Name</th><th>Last Name</th><th>Sex</th><th>Hire Date</th></tr>';

  employees.forEach((employee) => {
    html += `<tr><td>${employee.employeeNumber}</td><td>${employee.birthDate}</td><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.sex}</td><td>${employee.hireDate}</td></tr>`;
  });

  html += '</table>';

  res.send(html);
});

// Route to sort the employee information by birth date
app.get('/sort/birthDate', (req, res) => {
  employees.sort((a, b) => {
    return a.birthDate.localeCompare(b.birthDate);
  });

  let html = '<table><tr><th>Employee Number</th><th>DOB</th><th>First Name</th><th>Last Name</th><th>Sex</th><th>Hire Date</th></tr>';

  employees.forEach((employee) => {
    html += `<tr><td>${employee.employeeNumber}</td><td>${employee.birthDate}</td><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.sex}</td><td>${employee.hireDate}</td></tr>`;
  });

  html += '</table>';

  res.send(html);
});

// Route to sort the employee information by hire date
app.get('/sort/hireDate', (req, res) => {
  employees.sort((a, b) => {
    return a.hireDate.localeCompare(b.hireDate);
  });

  let html = '<table><tr><th>Employee Number</th><th>DOB</th><th>First Name</th><th>Last Name</th><th>Sex</th><th>Hire Date</th></tr>';

  employees.forEach((employee) => {
    html += `<tr><td>${employee.employeeNumber}</td><td>${employee.birthDate}</td><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.sex}</td><td>${employee.hireDate}</td></tr>`;
  });

  html += '</table>';

  res.send(html);
});

// Route to sort the employee information by last name
app.get('/sort/lastName', (req, res) => {
  employees.sort((a, b) => {
  return a.lastName.localeCompare(b.lastName);
  });
  
  let html = '<table><tr><th>Employee Number</th><th>DOB</th><th>First Name</th><th>Last Name</th><th>Sex</th><th>Hire Date</th></tr>';
  
  employees.forEach((employee) => {
    html += `<tr><td>${employee.employeeNumber}</td><td>${employee.birthDate}</td><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.sex}</td><td>${employee.hireDate}</td></tr>`;
  });
  
  html += '</table>';
  
  res.send(html);
  });


   
  
  
  // Start the server on port 3000
  app.listen(3001, () => {
  console.log('Server started on port 3000');
  });