import React,{useState} from 'react';
import './Signin.css';
import { doSignInWithEmailAndPassword,doSigninWithGoogle} from '../../firebase/auth';
import { useAuth } from '../../contexts/authContext/authIndex';
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
import { Navigate } from 'react-router-dom';

function Signin() {
  const {userLoggedIn}=useAuth();

  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [isSigningIn, setIsSigningIn] =useState(false);
  const [errorMessage, setErrorMessage] =useState('');

  const onSubmit=async(e)=>{

    e.preventDefault();
    if(!isSigningIn){
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email,password)
    }
  }

  const onGoogleSignIn=async(e)=>{
    e.preventDefault();
    if(!isSigningIn){
      setIsSigningIn(true);
      await doSigninWithGoogle().catch((error)=>{
        setIsSigningIn(false);
      });
    }
  }

  return (
    <div className="signin">
    <MDBContainer fluid className='my-5'>
      {userLoggedIn && (<Navigate to={'/Home'} replace={true}/>)}
      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign in now</h2>

             

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={onSubmit}>sign in</MDBBtn>

              <div className="text-center">
                <p>Not a member? <a href="/signup" style={{color: '#1266f1'}}>Sign up</a></p>

                <p>or sign in with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#a80210' }} onClick={(e)=>{onGoogleSignIn(e)}}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>
                
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>


                

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
    </div>
  );
}

export default Signin;