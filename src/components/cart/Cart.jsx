import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import React, { useState, useEffect } from "react";
  import './Cart.css';
  import { useParams, useNavigate } from "react-router-dom";
  import { doc, getDoc } from 'firebase/firestore';
  import { db } from "../../firebase/firebase";
  import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
  
  export default function Cart() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
  
    const donePayment = () => {
      navigate('/Home/cart/paymentdone');
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const errors = {};
      if (!cardholderName) errors.cardholderName = 'Cardholder name is required';
      if (!cardNumber) errors.cardNumber = 'Card number is required';
      if (!expiration) errors.expiration = 'Expiration date is required';
      if (!cvv) errors.cvv = 'CVV is required';
  
      setFormErrors(errors);
  
      if (Object.keys(errors).length === 0) {
        // Perform payment logic here
        donePayment();
      }
    };
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const productDoc = await getDoc(doc(db, 'Smartphones', productId));
          if (productDoc.exists()) {
            setProduct(productDoc.data());
          } else {
            console.error('No such document!');
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, [productId]);
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="cart">
        {/* <Navbar /> */}
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard>
                  <MDBCardBody className="p-4">
                    <MDBRow>
                      <MDBCol lg="7">
                        <MDBTypography tag="h5">
                          <a href="#!" className="text-body" onClick={() => { navigate('/Home') }}>
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                            shopping
                          </a>
                        </MDBTypography>
                        <hr />
                        <MDBCard className="mb-3">
                          <MDBCardBody>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <MDBCardImage
                                    src={product.image}
                                    fluid className="rounded-3" style={{ width: "65px" }}
                                    alt="Shopping item" />
                                </div>
                                <div className="ms-3">
                                  <MDBTypography tag="h5" className="name">
                                    {product.Name}
                                  </MDBTypography>
                                  <p className="small mb-0">{product.ram}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <MDBTypography tag="h5" className="fw-normal mb-0">
                                    2
                                  </MDBTypography>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <MDBTypography tag="h5" className="mb-0">
                                    {product.price}
                                  </MDBTypography>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <MDBIcon fas icon="trash-alt" />
                                </a>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol lg="5">
                        <MDBCard className="bg-primary text-white rounded-3">
                          <MDBCardBody>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <MDBTypography tag="h5" className="mb-0">
                                Card details
                              </MDBTypography>
                            </div>
                            <p className="small">Card type</p>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-visa fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-amex fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                            </a>
                            <form className="mt-4" onSubmit={handleFormSubmit}>
                              <MDBInput
                                className="mb-4"
                                label="Cardholder's Name"
                                type="text"
                                size="lg"
                                placeholder="Cardholder's Name"
                                contrast
                                value={cardholderName}
                                onChange={(e) => setCardholderName(e.target.value)}
                                required
                              />
                              {formErrors.cardholderName && <p className="text-danger">{formErrors.cardholderName}</p>}
                              <MDBInput
                                className="mb-4"
                                label="Card Number"
                                type="text"
                                size="lg"
                                minLength="19"
                                maxLength="19"
                                placeholder="1234 5678 9012 3457"
                                contrast
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                              />
                              {formErrors.cardNumber && <p className="text-danger">{formErrors.cardNumber}</p>}
                              <MDBRow className="mb-4">
                                <MDBCol md="6">
                                  <MDBInput
                                    className="mb-4"
                                    label="Expiration"
                                    type="text"
                                    size="lg"
                                    minLength="5"
                                    maxLength="5"
                                    placeholder="MM/YYYY"
                                    contrast
                                    value={expiration}
                                    onChange={(e) => setExpiration(e.target.value)}
                                    required
                                  />
                                  {formErrors.expiration && <p className="text-danger">{formErrors.expiration}</p>}
                                </MDBCol>
                                <MDBCol md="6">
                                  <MDBInput
                                    className="mb-4"
                                    label="Cvv"
                                    type="text"
                                    size="lg"
                                    minLength="3"
                                    maxLength="3"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    contrast
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    required
                                  />
                                  {formErrors.cvv && <p className="text-danger">{formErrors.cvv}</p>}
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Subtotal</p>
                                <p className="mb-2">$4798.00</p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Shipping</p>
                                <p className="mb-2">$20.00</p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Total(Incl. taxes)</p>
                                <p className="mb-2">$4818.00</p>
                              </div>
                              <MDBBtn color="info" block size="lg" type="submit">
                                <div className="d-flex justify-content-between">
                                  <span>$4818.00</span>
                                  <span>
                                    Checkout{" "}
                                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                  </span>
                                </div>
                              </MDBBtn>
                            </form>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        {/* <Footer/> */}
      </div>
    );
  }
  