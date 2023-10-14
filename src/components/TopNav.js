import React, {useEffect} from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/Netflix_2015_logo.png'

import {onAuthStateChanged, signOut} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config';

const TopNav = ({ isScrolled }) => {

  const navlinks = [
    { name: "Home", link: '/' },
    { name: "Tv Shows", link: '/tv' },
    { name: "My List", link: '/mylist' },
    { name: "Movies", link: '/movies' }
  ]

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate('/login');
    }) 
  }, [navigate])
  


  return (
    <NavContainer>
      <nav className={`${isScrolled ? 'scrolled' : 'notScrolled'}`}>
        <div className='leftSide'>
          <div className='logo'>
            <img src={logo} alt='logo'></img>
          </div>
        </div>
        <ul className='links'>
          {
            navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link>{name}</Link>
                </li>
              )
            })
          }
        </ul>
        <div className='rightSide'>
          <button onClick={()=>signOut(firebaseAuth)}>
            <AiOutlineLogout />Sign Out
          </button>
        </div>
      </nav>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  .notScrolled{
    display: flex;
  }
  .scrolled{
    display: flex;
    background-color: black;
  }
  nav{
    position: sticky;
    top: 0;
    height: 4.8rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    align-items: center;
    transition: 0.3s ease-in-out;
    padding: 1rem;
  
    

    .leftSide{
      display: flex;
      align-items: center;
      gap: 2rem;
   
      .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
        width: 6.5rem;
        height: auto;
        margin-left: 2.5rem;
        
        }
      }
    }
    .links{
        display: flex;
        text-align: left;
        float: left;
        gap: 3rem;
        padding: 1rem;
        margin-left: -45rem;
        li{
          list-style-type: none;
          a{
            color: white;
            text-decoration: none;
            
          }
        }
    }
    .rightSide {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      button{
        display: flex;
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem;
        padding: 0.6rem;
        color: white;
        font-size: 1rem;
        align-items: center;
      }
      &:focus{
        outline: none;
      }
      
      svg{
        color: white;
        font-size: 1.2rem;
        display: flex;
        margin-right: 0.3rem;
        align-items: center;
      }
      }
    
  }
  

`

export default TopNav