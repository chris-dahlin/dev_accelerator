
import React, { useState } from 'react'



function App() {

const [name, setName] = useState('')
const [submit, setSubmit] = useState(false)


const handleInputChange = (event) => {
if (!submit){
  setName(event.target.value)

  }  
}

const handleSubmit = (event) => {
event.preventDefault()
// setName(event.target.element.value)
setSubmit (true)
}
  
  return (
    <div>
      <h3>Welcome user</h3>
      {submit ? (
      <p>Welcome, {name}!</p>
      ) : (

      <form onSubmit={handleSubmit}>
      <label>
      
      <input type="text" value = {name} onChange={handleInputChange} placeholder='Enter Name:' required />
      </label>  
      <button type='submit'>Submit</button>
      </form>
  
      )}
      </div>
  )
}

export default App
