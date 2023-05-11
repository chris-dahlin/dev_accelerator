import React, { useState } from 'react';

const myHotel = [
  {
    id: 1,
    room_number: 101,
    room_price: 89.99,
    available: false,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 2,
    room_number: 102,
    room_price: '',
    available: false,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
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
    room_price: 89.99,
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
    room_price: '',
    available: false,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  },
  {
    id: 6,
    room_number: 106,
    room_price: 99.99,
    available: false,
    checkin_date: '',
    checkout_date: '',
    customer_name: '',
    customer_phone: '',
    notes: ''
  }
];

function App() {
  const options = myHotel.map((room) => room.room_number);
  const [selectedOption, setSelectedOption] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    setShowMessage(true);
  };

  const isOptionSelected = selectedOption !== '';

  // Find the selected room object based on the selected option
  const selectedRoom = myHotel.find(
    (room) => room.room_number === Number(selectedOption)
  );

  return (
    <div>
      <h1>Select a Room to book:</h1>
      <select value={selectedOption} onChange={handleSelect}>
        <option value="">-- Please Select --</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {showMessage && isOptionSelected && (
        <p>
          Room {selectedRoom.room_number} is currently {selectedRoom.available ? 'available' : 'not available'}
        </p>
      )}
      {showMessage && !isOptionSelected && <p>Please select a room.</p>}
    </div>
  );
}

export default App;