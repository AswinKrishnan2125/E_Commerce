import React from 'react'
import Navbar from '../navbar/Navbar';
import Menu from '../menu/Menu';
// import Card from '../../cards/Card';
import Mobile from '../products/mobiles/Mobile';
import Electronics from '../products/electronics/Electronics';
import './Home.css'
import Footer from '../footer/Footer';
function Home() {
   
  return (
    <div className='home'>
        <Navbar/>
        <Menu/>
        <Mobile/>
        <Electronics/>
        <Footer/>
    </div>
  )
}

export default Home
