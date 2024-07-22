import React from 'react'
import './Final.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
function Final() {
    const navigate=useNavigate();
  return (
    <div className='final'>
      <Navbar/>
      <h2>Congrats Your order get placed....</h2>
      <button onClick={()=>{navigate('/Home')}}>Continue shopping</button>
    </div>
  )
}

export default Final
