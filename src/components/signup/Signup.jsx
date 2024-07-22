import React,{useState} from 'react';
import './Signup.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
// import { doCreateUserWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/authIndex';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';

function Signup() {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [isSigningUp, setIsSigningUp] =useState(false);
    const[errorMessage,setErrorMessage]=useState('');
    const {userLoggedIn}=useAuth();
    // const navigate=useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        if (!isSigningUp) {
            setIsSigningUp(true);
            if (password !== confirmPassword) {
                setErrorMessage('Passwords do not match');
                setIsSigningUp(false);
                return;
            }
            try {
                await doCreateUserWithEmailAndPassword(email, password);
                // Redirect or show success message
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsSigningUp(false);
            }
        }
    };

  return (
    <MDBContainer fluid className='my-5'>
        {userLoggedIn && (<Navigate to={'/Home'} replace={true}/>)}
      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

             
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form5' type='password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={handleSignup}>sign up</MDBBtn>

              <div className="text-center">
                <p>Already have an account? <a href="/" style={{color: '#1266f1'}}>Sign in</a></p>

                
                

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34863.jpg?size=626&ext=jpg" class="w-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;