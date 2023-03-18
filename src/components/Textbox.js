import React, { useState } from 'react'
import './Textbox.css'
function Textbox() {
  const [state, setState] = useState('');

  const handleChange = (e) => {
 
  const result = e.target.value.replace(/[^a-z0-9]/gi, '');


  setState(result);
};
  return (
    <div >
      <h1 className='heading'>TEXTBOX</h1>
      <input className='input'
       
        name="message"
        type="text"
        value={state}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  )
}

export default Textbox