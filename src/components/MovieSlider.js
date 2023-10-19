import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

export default React.memo (function MovieSlider({ data, title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div className='slider-wrapper'>
        <div className={`slider-action left`}>
        <BsChevronLeft/>
        </div>
        <div className='slider'>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />
            })
          }
        </div>
        <div className={`slider-action right`}>
        <BsChevronRight/>
        </div>
      </div>

    </Container>
  )
});

const Container = styled.div`
gap: 1rem;
position: relative;
padding: 1rem 0;
h1{
  margin-left: 50px;
  padding: 5px;
  font-size: 25px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
}
.slider-wrapper{
  .slider{
    display: flex;
    width: max-content;
    transform: translateX(0px);
    transition: 1s ease-in-out;
    margin-left: 50px;
  }
  .slider-action{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    height: 100%;
    top: 2rem;
    bottom: 0;
    width: 50px;
    transition: 1s ease-in-out;
    svg{
      color: white ;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      opacity: 0;
      &:hover{
        opacity: 1;
        transition: 0.3s ease-in-out;
      }
    .left{
      left: 0;
      margin-left: 20px;
    }
    .right{
      right: 0;
      margin-right: 20px;
    }

    }
  }
}`