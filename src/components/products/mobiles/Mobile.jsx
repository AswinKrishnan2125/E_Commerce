import React from 'react'
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Card from '../../card/Card';
import { MDBBtn, MDBRow } from 'mdb-react-ui-kit';
import './Mobile.css';

function Mobile() {
    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          const querySnapshot = await getDocs(collection(db, 'Smartphones'));
          const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMobile(productsData);
        };
    
        fetchProducts();
      }, []);
  return (
    <div className='mobile'>
        <h3>Deals on Smartphones<MDBBtn className='btn' href='' color='none'>View More</MDBBtn></h3>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {mobile.map((mobile, index) => (
          <Card
            key={index}
            id={mobile.id}
            image={mobile.image}
            title={mobile.Name}
            description={mobile.description}
          />
        ))}
      </MDBRow>

    </div>
  )
}

export default Mobile
