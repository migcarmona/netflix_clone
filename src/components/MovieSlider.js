import React, { useState, useRef } from 'react';
import Card from './Card';
import styled from 'styled-components';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

export default React.memo (function MovieSlider({ data, title }) {

  const listRef = useRef()
  
  const [controlVisibility, setControlVisibility] = useState(false)

  const [sliderPosition, setSliderPosition] = useState(0)

  const sliderDirection = (direction)=>{
    let distance = listRef.current.getBoundingClientRect().x -50;
    if (direction === 'left' && sliderPosition > 0){
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      setSliderPosition(sliderPosition - 1)
    }
    if (direction === 'right' && sliderPosition < 4){
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
      setSliderPosition(sliderPosition + 1)
    }
};

  return (
    <Container 
    controlVisibility = {controlVisibility}
    onMouseEnter={()=>setControlVisibility(true)}
    onMouseLeave={()=>setControlVisibility(false)}
    >
      <h1>{title}</h1>
      <div className='slider-wrapper'>
        <div className={`slider-action left ${!controlVisibility ? 'none' : ''}`}>
        <BsChevronLeft onClick={()=>sliderDirection('left')}/>
        </div>
        <div className='slider' ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />
            })
          }
        </div>
        <div className={`slider-action right ${!controlVisibility ? 'none' : ''}`}>
        <BsChevronRight onClick={()=>sliderDirection('right')}/>
        </div>
      </div>

    </Container>
  )
});

const Container = styled.div`
gap: 1rem;
position: relative;
padding: 1rem 0;
caret-color: transparent;
h1{
  padding: 5px;
  font-size: 25px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  margin-left: 50px;
}
.slider-wrapper{
  
  caret-color: transparent;
  .slider{
    display: flex;
    width: max-content;
    
    transform: translateX(0px);
    transition: 0.4s ease-in-out;
    margin-left: 50px;
    
  }
  .slider-action{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    height: 130px;
    width: 70px;
    top: 3.6rem;
    width: 60px;
    transition: 0.4s ease-in-out;
    background-image: linear-gradient(to right, black, transparent);
    svg {
      color: white;
      font-size: 10px;
      height: 100%;
      width: auto;
      padding: 15px;
      cursor: pointer;
   
  /*     &:hover{
        opacity: 1;
        transition: 0.3s ease-in-out;
      } */
    }
  }
  .left{
    left: 0;
    
  }
  .right{
    right: 0;
    background-image: linear-gradient(to left, black, transparent);
  }
  .none{
    display: none;
    transition: 0.3s ease-in-out;
  }
}`