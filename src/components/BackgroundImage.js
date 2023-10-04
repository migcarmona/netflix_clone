import React from 'react'
import styled from 'styled-components'
import background from '../images/PT-en-netflix-background.jpg'

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img src={background}
      alt='no link'/>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: auto;
    width: auto;
    object-fit: cover;
    overflow: auto;
  }`
export default BackgroundImage