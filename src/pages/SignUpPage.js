import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import { firebaseAuth } from '../utils/firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
/* import { async } from '@firebase/util' */
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const navigate = useNavigate()

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    catch (error) {
      console.log(error)
    }
  }

 /*  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate('/')
  }) */

  return (
    <Container>
      <BackgroundImage />
      <div className='content'>
        <Header login />
        <div className='body'>
          <div className='text'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere, cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart membership.</h6>
          </div>
          <div className='form'>
            {
              showPassword ? (
                <input type='password' placeholder='Password' name='password'
                  value={formValues.password}
                  onChange={(e) => setFormValues({
                    ...formValues, [e.target.name]: e.target.value
                  })} />
              ) : <input type='email' placeholder='Email address' name='email'
                value={formValues.email}
                onChange={(e) => setFormValues({
                  ...formValues, [e.target.name]: e.target.value
                })} />
            }
            {
              !showPassword ? (
                <button onClick={() => setShowPassword(true)}>Get Started</button>
              ) : <button onClick={handleSignIn}>Sign Up</button>
            }

          </div>
        </div>
      </div>
    </Container>

  )
}

const Container = styled.div`
position: relative;
.content{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.79);
  height: 100vh;
  width: 100vw;
  grid-template-columns: 15vh 85vh;
  .body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text{
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    font-size: 1.7rem;
    margin-top: 10rem;
  }
  h1{
    padding: 0.25rem;
  }
  h4{
    margin-top: -1.5rem;
  }
  h6{
    margin-top: -0.5rem;
  }
}
.form{
  display: grid;
  width: 100%;
  max-width: 38rem;
  grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
  input{
    color: white;
    padding: 1.25rem;
    font-size: 1.2rem;
    width: auto;
    border-color: white;
    border-radius: 0.25rem;
    background-color: rgba(0,0,0,0.4)
    }
  button{
    width: 100%;
    background-color: red;
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
    cursor: pointer;
    border: none;
    font-weight: bold; 
  }
}
`

export default SignUpPage