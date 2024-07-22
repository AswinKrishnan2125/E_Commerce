import React from 'react'
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Card from '../../card/Card';
import { MDBBtn, MDBRow } from 'mdb-react-ui-kit';
// import './Mobile.css';
import './Electronics.css';

function Electronics() {
    const [electronics, setElectronics] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          const querySnapshot = await getDocs(collection(db, 'electronics'));
          const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setElectronics(productsData);
        };
    
        fetchProducts();
      }, []);
  return (
    <div className='electronics'>
        <h3>Top Deals on Electronics<MDBBtn className='btn' href='' color='none'>View More</MDBBtn></h3>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {electronics.map((electronics, index) => (
          <Card
            key={index}
            id={electronics.id}
            image={electronics.image}
            title={electronics.Name}
            description={electronics.description}
          />
        ))}
      </MDBRow>

    </div>
  )
}

export default Electronics
