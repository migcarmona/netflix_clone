import { useNavigate } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import netflixLogo from '../images/Netflix_2015_logo.png'

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <div className='logo'>
        <img alt='no link' src={netflixLogo}/>
        <p className='clone'>clone</p>
      </div>
       <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign Up'}
      </button> 
      {/* <button onClick={()=>navigate('/login')}>Sign In</button> */}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  .clone{
    color: white;
    margin-left: 10px;
    font-style: italic;
   }
  .logo{
    img{
      height: 3rem;
      cursor: pointer;
      padding-top: 1rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 0.9rem;
  }
`

export default Header