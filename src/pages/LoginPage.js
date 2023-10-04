import React, { useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util';
import styled from 'styled-components'
import { firebaseAuth } from '../utils/firebase-config';

import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'



const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    }
    catch (error) {
      console.log(error)
    }
  }

   onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  }) 


  return (
    <Wrapper>
      <BackgroundImage />
      <div className='main-content'>
        <Header />
        <div className='login-form-wrapper'>
          <div className='login-form'>
            <div className='container'>
              <div className='title'>
                <h1>Sign In</h1>
              </div>
              <input type='email' placeholder='Email or phone number' onChange={(e) => setEmail(e.target.value)} value={email} />
              <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
              <button onClick={handleLogin}>Sign In</button>
              <p className='floatLeft'>Remember me</p>
              <p className='floatRight'>Need help?</p>
              <div className='after-form'>
                <p className='floatLeft'>New to Netflix? <span >Sign up now</span>.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
.main-content{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  height: 100vw;
  width: 100vw;
  object-fit: cover;
  .login-form-wrapper{
    display: block;
    max-width: 450px;
    min-height: 100vh;
    margin-top: 50px;
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
    margin: 0 auto 0;
    
  }
  .login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    max-width: 450px;
    min-width: 380px;
    min-height: 660px;
    padding: 50px;
    margin-bottom: 90px;
    margin-top: 30px;
    color: white;
    border-radius: 4px;
    box-sizing: border-box;
    .container{
      margin-top: -20px;
      display: block;
      width: 90%;
      .title{
        display: block;
      }
      input{
        position: relative;
        margin-top: 10px;
        margin-bottom: 16px;
        border-radius: 0.3rem;
        border: none;
        padding: 0.5rem 1rem;
        width: 90%;
        height: 2.2rem;
        outline: none;
        background-color: rgba(100,100,100,1);
        color: white;
        font-size: medium;
        ::placeholder{
          color: white;
        }
      }
      button{
        width: 100%;
        height: 3rem;
        background-color: red;
        color: white;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        border: none;
        font-weight: bold;
        font-size: 1rem;
        margin-top:25px;
        :active{
          opacity: 0.8;
        }
      }
      p{
        font-size: 14px;
        cursor: pointer;
      }
        .floatLeft{
          float: left;
        }
        .floatRight{
          float: right;
        }
    }
} }`
export default LoginPage