import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'



const LoginPage = () => {
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
              <input type='text' placeholder='Email or phone number' />
              <input type='text' placeholder='Password' />
              <button>Sign In</button>
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
  background-color: rgba(0,0,0,0.5);
  height: 100vh;
  width: 100vw;
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
    background-color: rgba(0,0,0,0.75);
    width: 100%;
    max-width: 450px;
    min-width: 380px;
    min-height: 660px;
    padding: 60px;
    margin-bottom: 90px;
    margin-top: 30px;
    color: white;
    border-radius: 4px;
    box-sizing: border-box;
    .container{
      display: block;
      width: 100%;
      .title{
        display: block;
      }
      input{
        position: relative;
        margin-bottom: 16px;
        border-radius: 0.4rem;
        padding: 0.5rem 1rem;
        width: 90%;
        height: 2.7rem;
        outline: none;
        background-color: rgba(189,195,199,0.75);
        color: rgba(239,239,240,1);
        font-size: medium;
      }
      button{
        width: 100%;
        height: 3.95rem;
        background-color: red;
        color: white;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        border: none;
        font-weight: bold;
        font-size: 1.25rem;
      }
    }
} }
`
export default LoginPage