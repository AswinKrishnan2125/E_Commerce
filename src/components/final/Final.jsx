import React from 'react'
import './Final.css'
import { useNavigate } from 'react-router-dom'
function Final() {
    const navigate=useNavigate();
  return (
    <div className='final'>
      <h2>Congrats Your order get placed....</h2>
      <button onClick={()=>{navigate('/Home')}}>Continue shopping</button>
    </div>
  )
}

export default Final
