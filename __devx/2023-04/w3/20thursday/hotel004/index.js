
const fs = require('fs')

const myMotelData = JSON.parse(fs.readFileSync('./roominfo.js', 'utf-8'))

// console.log(myMotelData)

// Creating Variables for customer input - dates, name, notes, phone #, room #
const userRoom = 105
const userName = 'Chris Dahlin'
const requestedCheckInDate = new Date('2023-04-20')
const requestedCheckOutDate = new Date('2023-04-27')
// const bookedCheckInDate = new Date(myMotelData.checkin_date)
// const bookedCheckOutDate = new Date(myMotelData.checkout_date)
// const bookedCheckOutDate = new Date('2023-04-24')
const userNotes = 'Would like to check out by 9AM'

// ChatGPT Date Checker
// if (requestedStartDate <= rentedEndDate && requestedEndDate >= rentedStartDate) {
checkIn = (userRoom, requestedCheckInDate, requestedCheckOutDate) => {
    for (let i = 0; i < myMotelData.length; i++) {
        if (myMotelData[i].room_number == userRoom && requestedCheckInDate <= new Date (myMotelData[i].checkout_date) && requestedCheckOutDate >= new Date (myMotelData[i].checkin_date)){
            console.log(`Room ${userRoom} is already booked at these dates`);}
            
            else if (myMotelData[i].room_number == userRoom) {
                console.log(`Room ${userRoom} is available`);
                myMotelData[i].customer_name = userName
                myMotelData[i].notes = userNotes;
                myMotelData[i].checkin_date = requestedCheckInDate;
                myMotelData[i].checkout_date = requestedCheckOutDate;
                
                fs.writeFileSync('./roominfo.js', JSON.stringify(myMotelData))
            }

        }

    }

checkIn(userRoom, requestedCheckInDate, requestedCheckOutDate)






