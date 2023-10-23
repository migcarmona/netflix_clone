import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SlLike, SlDislike } from "react-icons/sl";
import { BiChevronDown } from "react-icons/bi";
/* import { MdRemove } from "react-icons/md"; */

export default React.memo(function Card({movieData}) { 

    const [onHover, setOnHover] = useState(false)
    const navigate = useNavigate()


    return (
        <CardContainer
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
               /*  src={`https://api.themoviedb.org/3/movie/${movieData.id}/images`} */
                alt='movie poster'
                onClick={() => navigate('/player')}
            />
            {onHover && (
                <div className='hover'>
                    <div className='image-video-wrapper'>
                        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                            alt='movie poster'
                            onClick={() => navigate('/player')}
                        />
                        {setTimeout(()=>{
                            <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4'
                            autoPlay loop controls
                        />
                        })}
                         
                    </div>
                    <div className='info-container'>
                        <h3 className='movieName' onClick={() => navigate('/player')}>{movieData.name}</h3>
                        <div className='icons'>
                            <div className='controls'>
                                <div className='outline'>
                                <IoPlayCircleSharp
                                    title='play'
                                    onClick={() => navigate('/player')} />
                                </div>
                              <div className='nocircle'>
                              <SlLike title='like' />
                              </div>
                              <div className='nocircle'>
                              <SlDislike title='dislike' />
                              </div>
                              <div className='outline'>
                              <AiOutlinePlusCircle title='Add to my list' />
                              </div>
                              {/* <div className='circle'>
                              <MdRemove title='Remove from my list' />
                              </div> */}
                            </div>
                            <div className='nocircle'>
                                <BiChevronDown title='More Info' />
                            </div>
                        </div>
                        <div className='genre'>
                            <ul>
                                {movieData.genres.map((genres)=>
                                <li>{genres}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </CardContainer>
    )
});

const CardContainer = styled.div`
margin: 0.2rem;
max-width: 230px;
width: 230px;
height: 100%;
cursor: pointer;
position: relative;
background-color: black;

img{
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.hover{
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.4rem;
    border: none;
    background-color: #181818;
    transition: 2s ease-in-out;
    -webkit-transition: 2s ease-in-out;
    .image-video-wrapper{
        position: relative;
        height: 140px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
            transition: 3s ease-in-out;
        }
    }
    .info-container{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
        .movieName{
            color: white;
        }
    }
    .icons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .controls{
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        .circle{
            border: 0.1rem solid white;
            border-radius: 50%;
            font-size:30px;
        }
        .nocircle{
            font-size:30px;
        }
        .outline{
            font-size: 40px;
        }
        svg{
            color: white;
            cursor: pointer;
            transition: 0.1s ease-in-out;
            &:hover{
            color: #b8b8b8;
            }
        }
    }
    .genre{
        display: flex;
        color: white;
        font-weight: 400;
        ul{
            display: flex;
            gap: 1rem;
            li{
                padding-right: 0.7rem;
                &:first-of-type{
                    list-style-type: none;
                }
            }
        }
    }
}
`
