const fs = require('fs')

let myMotelData = fs.readFileSync('./roominfo.js', 'utf-8') 

//console.log(myMotelData);

const myMotelJSON = JSON.parse(myMotelData)

// Diss Miss
//console.log(myMotelJSON[0].customer_name);

// Simulate receiving info from webpage form
const checkInName = 'Chris Dahlin'
const checkinRoomNumber = 103 


// checkin function 
checkin = () => {
    // if the room matched and is available, perform checkin
    for (i = 0; i < myMotelJSON.length; i++) {
        if (myMotelJSON[i].room_number == checkinRoomNumber && myMotelJSON[i].available) {
            myMotelJSON[i].customer_name = checkInName
            console.log(myMotelJSON[i]);
        } else if (myMotelJSON[i].room_number == checkinRoomNumber && myMotelJSON[i].available == false) {
            
            console.log(`Room ${myMotelJSON[i].room_number} is unavailable`);
        }
        
    }
}
checkin()

// Chris Dahlin
//console.log(myMotelJSON[0].customer_name);

// console.log(myMotelJSON[0]);


fs.writeFileSync('./roominfo.js', JSON.stringify(myMotelJSON))

