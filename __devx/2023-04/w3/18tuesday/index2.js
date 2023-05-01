// Initializing fs 
const fs =  require ('fs')
// Combine the JSON parse and readfilesync 
const myMotelData = JSON.parse(fs.readFileSync('./roominfo.js', 'utf-8'))


// console.log(myMotelData);

// // Create new check in information
// let checkInName = 'Christopher Dahlin'
// let checkinRoomNumber = 103
let checkInDate = new Date('2023-04-18')
let checkOutDate = new Date('2023-04-21')
let 



checkin = (checkInName, checkinRoomNumber) => {
for (i = 0; i < myMotelData.length; i ++){
    if (myMotelData[i].room_number == checkinRoomNumber && myMotelData[i].checkInDate.length == " ") {
        myMotelData[i].customer_name = checkInName;
        myMotelData[i].checkin_date = checkInDate;
        myMotelData[i].checkout_date = checkOutDate;
        console.log(myMotelData[i]);
  } 
 }
}

checkin('Chris Dahlin', 105)

// fs.writeFileSync('./roominfo.js', JSON.stringify(myMotelData))