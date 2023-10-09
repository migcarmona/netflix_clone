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
  overflow: hidden;
  object-fit: cover;
  z-index: -1;
  display: block;
  img {
    min-height: 100%;
    min-width: 100%;
  }`
export default BackgroundImage