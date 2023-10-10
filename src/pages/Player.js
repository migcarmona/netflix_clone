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
        
      </div>

    </PlayContainer>
  )
}

const PlayContainer = styled.div`
.backArrow{
  color: white;
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem 2rem;

}
`

export default Player