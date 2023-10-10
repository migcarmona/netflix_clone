import React, { useState } from 'react'
import ageUltron from '../images/age-of-ultron.png'
import TopNav from '../components/TopNav'

import styled from 'styled-components'
import { AiOutlineInfo, AiOutlinePlayCircle } from 'react-icons/ai'

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  console.log(isScrolled)

  return (
    <HeroContainer>
      <div className='hero'>
      <TopNav isScrolled={isScrolled} />
      <img className='background-image' alt='no connection' src={ageUltron} />
      <div className='container'>
        <div className='title'>
          <h1>Iron Man</h1>
          <p>Qui, qua, questra, na tua testa. Tal não é a força do Iron Man, com o seu fato super especial de corrida, do tipo super-carapau 3500 mega-nice.</p>
        </div>
        <div className='buttons'>
          <button className='playBtn'>{AiOutlinePlayCircle} Play</button>
          <button className='moreBtn'>More info</button>
        </div>
      </div>
      </div>
    </HeroContainer >
  )
}

const HeroContainer = styled.div`

.background-image{
  filter: brightness(40%);
  background-image: linear-gradient(to left, black, white);
}
.hero{
  position: relative;
  img{
    height: auto;
    width: 100%;
  }
  .container{
    position: absolute;
    bottom: 10rem;
    .title{
      h1{
        margin-left: 3.5rem;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
      }
      p{
        margin-bottom: 50px;
        width: 640px;
        margin-left: 3.5rem;
        font-family: 'lexend Deca', sans-serif;
        color: white;
        font-size: 17px;
        font-weight: 200;
        text-shadow: 1px 1px 1px black;
      }
    }
    .buttons{
      display: flex;
      margin: 3.5rem;
      gap: 1rem;
      .playBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        border-radius: 0.3rem;
        font-size: 1.4rem;
        font-weight: 500;
        gap: 1rem;
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 0.3rem;
        font-size: 1.4rem;
        font-weight: 500;
        gap: 1rem;
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border: 0.1rem solid white;
        cursor: pointer;
        background-color: black;
        opacity: 0.5;
      }
    }
  }
}
`

export default Netflix