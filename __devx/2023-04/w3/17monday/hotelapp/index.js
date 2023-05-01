// Use fs to read the file containing the myMotel array of objects
// Book a room or make a change
// Use fs to write to the file with information imput by the client


const fs = require('fs');

let motelData = fs.readFileSync('./roominfo.txt', 'utf-8');
let motelObj = JSON.parse(motelData);

console.log(motelData);