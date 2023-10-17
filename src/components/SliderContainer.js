import React from 'react'
import MovieSlider from './MovieSlider'
import styled from 'styled-components'

const SliderContainer = ({movies}) => {

const getMoviesBetween = (start, end) => {
    return movies.slice(start, end)
}

  return (
    <SliderWrapper>
        <MovieSlider data={getMoviesBetween(0,10)} title="Only on Netflix"/>
        <MovieSlider data={getMoviesBetween(10,20)} title="Only on Netflix"/>
        <MovieSlider data={getMoviesBetween(20,30)} title="Only on Netflix"/>
        <MovieSlider data={getMoviesBetween(30,40)} title="Only on Netflix"/>
        <MovieSlider data={getMoviesBetween(40,50)} title="Only on Netflix"/>
        <MovieSlider data={getMoviesBetween(50,60)} title="Only on Netflix"/>
        <MovieSlider data={getMoviesBetween(60,70)} title="Only on Netflix"/>
        <MovieSlider data={getMoviesBetween(70,80)} title="Only on Netflix"/>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`

`

export default SliderContainer