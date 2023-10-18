import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const MovieSlider = ({ data, title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div className='slider-wrapper'>
        <div className='slider'>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />
            })
          }
        </div>
      </div>

    </Container>

  )
}

const Container = styled.div`
gap: 0.5rem;
margin-top: -150px;
position: absolute;
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
}

`

export default MovieSlider