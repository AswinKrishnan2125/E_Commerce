import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { doSignOut } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='nav'>
      <div className="brand">
        <h1>EQUINOX</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for Products" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      {/* <div className="cart"> */}
        <FontAwesomeIcon icon={faShoppingCart} />
        <button onClick={() => {
          doSignOut().then(() => {
            navigate('/')
          })
        }}>Logout</button>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
