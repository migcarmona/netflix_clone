import React from 'react'
import MovieSlider from './MovieSlider'
import styled from 'styled-components'

const SliderContainer = ({movies}) => {

const getMoviesBetween = (start, end) => {
    return movies.slice(start, end);
}

  return (
    <SliderWrapper>
        <MovieSlider data={getMoviesBetween(0,10)} title="New Releases"/>
     {/*    <MovieSlider data={getMoviesBetween(10,20)} title="Trending"/>
        <MovieSlider data={getMoviesBetween(20,30)} title="Only on Netflix"/>
        <MovieSlider data={getMoviesBetween(30,40)} title="Popular on Netflix"/>
        <MovieSlider data={getMoviesBetween(40,50)} title="Action"/>
        <MovieSlider data={getMoviesBetween(50,60)} title="Sci-fi"/>
        <MovieSlider data={getMoviesBetween(60,70)} title="Epic"/>
        <MovieSlider data={getMoviesBetween(70,80)} title="Romantic"/> */}
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`

`

export default SliderContainer