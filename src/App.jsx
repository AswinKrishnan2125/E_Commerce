import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup'
import Home from './components/home/home'
// import Navbar from './components/navbar/Navbar'
// import Footer from './components/footer/Footer'
import ProductDetails from './components/productDetails/ProductDetails'
import Cart from './components/cart/Cart'
import Final from './components/final/Final'
function App() {
  
  return (
    <div className="signin">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/'  element={<Signin/>}/>
          <Route path='/Signup'  element={<Signup/>}/>
          <Route path='/Home' element={<Home />}/>
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart/:productId" element={<Cart/>} />
          <Route path="/Home/cart/paymentdone" element={<Final/>}></Route>
          {/* <Route path='/Home/Purchase' element={<SelectedProduct selectedid={selectedid}/>}/> */}
        </Routes>
        
      </Router>
      {/* <Signin /> */}
    </div>
  )
}

export default App
