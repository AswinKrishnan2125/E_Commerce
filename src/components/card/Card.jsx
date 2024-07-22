import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdb-react-ui-kit';
import './Card.css'; // Import custom CSS
import { useNavigate } from 'react-router-dom';

function Card({ image, title, description,id}) {

    const navigate=useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <MDBCol xs="12" sm="6" md="4" lg="3" className="mb-4">
      <MDBCard className='custom-card h-100' onClick={handleClick}>
        <MDBCardImage className='custom-card-image' src={image} alt={title} position='top' />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default Card;
