const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hotel California MVP')
})

app.listen(3000)

console.log('Server listening on port 3000');


let myMotel = [
    {
      id: 1,
      room_number: 101,
      room_price: 89.99,
      available: false,
      checkin_date: '2023-04-10',
      checkout_date: '2023-04-14',
      customer_name: 'John Smith',
      customer_phone: '555-1234',
      notes: 'Late check-in requested'
    },
    {
      id: 2,
      room_number: 102,
      room_price: 89.99,
      available: false,
      checkin_date: '2023-04-12',
      checkout_date: '2023-04-15',
      customer_name: 'Jane Doe',
      customer_phone: '555-5678',
      notes: 'Early check-out requested'
    },
    {
      id: 3,
      room_number: 103,
      room_price: 99.99,
      available: true,
      checkin_date: '',
      checkout_date: '',
      customer_name: '',
      customer_phone: '',
      notes: ''
    },
    {
      id: 4,
      room_number: 104,
      room_price: 99.99,
      available: true,
      checkin_date: '',
      checkout_date: '',
      customer_name: '',
      customer_phone: '',
      notes: ''
    },
    {
      id: 5,
      room_number: 105,
      room_price: 109.99,
      available: true,
      checkin_date: '',
      checkout_date: '',
      customer_name: '',
      customer_phone: '',
      notes: ''
    },
    {
      id: 6,
      room_number: 106,
      room_price: 109.99,
      available: false,
      checkin_date: '',
      checkout_date: '',
      customer_name: '',
      customer_phone: '',
      notes: ''
    },
    {
      id: 7,
      room_number: 107,
      room_price: 119.99,
      available: true,
      checkin_date: '',
      checkout_date: '',
      customer_name: '',
      customer_phone: '',
      notes: ''
    },
    {
      id: 8,
      room_number: 108,
      room_price: 119.99,
      available: true,
      checkin_date: '',
      checkout_date: '',
      customer_name: '',
      customer_phone: '',
      notes: ''
    },
    {
      id: 9,
      room_number: 109,
      room_price: 129.99,
      available: false,
      checkin_date: '',
      checkout_date: '',
      customer_name: '',
      customer_phone: '',
      notes: ''
    },
    {
      id: 10,
      room_price: 129.99,
      room_number: 110,
      available: true,
      checkin_date: '',
      checkout_date: '',
      customer_name: '',
      customer_phone: '',
      notes: ''
    }
  ];


  for ( let i = 0; i < myMotel.length; i++) {

    if (myMotel[i].room_number == 101) {
        myMotel[i].available = false,
        myMotel[i].checkin_date = "Friday",
        myMotel[i].checkout_date = "Monday",
        myMotel[i].customer_name = "Zeke Zani",
        myMotel[i].customer_phone = "555-555-1234",
        myMotel[i].notes = "Needs to check out early on Monday",
        myMotel[i].amenities = "Hot Tub",
         
        console.log(myMotel[0])
        
    }
}

