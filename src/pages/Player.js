import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'


const Player = () => {

  const navigate = useNavigate()

  return (
    <PlayContainer>
      <div className='player'>
        <div className='backArrow'>
          <BsArrowLeft onClick={()=>navigate(-1)}/> 
          </div>
          <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4'
          autoPlay loop controls
          />
        
        
      </div>

    </PlayContainer>
  )
}

const PlayContainer = styled.div`
.player{
  width: 100vw;
  height: 100vh;
  .backArrow{
  position: absolute;
  z-index: 1;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem 2rem;
  }
  video{
    height: 100%;
    width: 100%;
  }
}
`

export default Player