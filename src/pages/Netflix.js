import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ageUltron from '../images/age-of-ultron.png';
import TopNav from '../components/TopNav';

import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchMovies, getGenres } from '../store';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import SliderContainer from '../components/SliderContainer';

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const movies = useSelector((state)=>state.netflix.movies);

  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);

  const dispatch = useDispatch();

  //console.log(movies)

  useEffect(()=>{
    dispatch(getGenres());
  });

  useEffect(()=>{
    if (genresLoaded){
      dispatch(fetchMovies({type: "all"}))
    }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  useEffect(() => {
    document.title = 'Home - Netflix Clone'
  })

//console.log(movies)

  return (
    <HeroContainer>
      <div className='hero'>
        <TopNav isScrolled={isScrolled} />
        <img className='background-image' alt='no connection' src={ageUltron} />
        <div className='container'>
          <div className='title'>
            <h1>Avengers</h1>
            <h2>Age of Ultron</h2>
            <p>Super-heróis fantásticos mega-fortes. Tal não é a força do Iron Man, com o seu fato super especial de corrida, do tipo super-carapau 3500 mega-nice. Ou então a super-força do super-Hulk super-forte verde que se farta.</p>
          </div>
          <div className='buttons'>
            <button onClick={() => navigate('player')} className='playBtn'><FaPlay /> Play</button>
            <button onClick={() => (
              <div>
                <img alt='Age of Ultron' src={ageUltron}/>
                <div className='info'>qui</div>
              </div>
         
            )} className='moreBtn'><AiOutlineInfoCircle /> More info</button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies} />
    </HeroContainer >

  )
}

const HeroContainer = styled.div`
min-height: 1500px;

.background-image{
  filter: brightness(40%);
  background-image: linear-gradient(to left, black, white); 
}
.hero{
  position: relative;
  
  img{
    max-height: 800px;
    width: 100%;
    object-fit: cover;
  }
  .container{
    position: absolute;
    top: 15rem;

    .title{
      h1{
        margin-left: 3.5rem;
        text-transform: uppercase;
        font-size: 80px;
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      h2{
        margin-left: 3.5rem;
        text-transform: uppercase;
        font-size: 30px;
        background: -webkit-linear-gradient(#eee, #000);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 2rem;
        margin-top: -0.5rem;
      }
      p{
        margin-bottom: 50px;
        width: 550px;
        margin-left: 3.5rem;
        font-family: 'Calibri', sans-serif;
        color: white;
        font-size: 20px;
        font-weight: 350;
        text-shadow: 1px 1px 1px black;
      }
    }
    .buttons{
      display: flex;
      margin: 3.5rem;
      margin-top: -1.5rem;
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
        &:hover {
          opacity: 0.75;
        }
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
        opacity: 0.75;
        &:hover {
         opacity: 0.5; 
        }
      }
    }
  }
}
`

export default Netflix