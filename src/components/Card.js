import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { MdRemove } from "react-icons/md";

const Card = () => {

    const [onHover, setOnHover] = useState(false)
    const navigate = useNavigate()

    return (
        <CardContainer
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU'
                alt='movie poster'
                onClick={() => navigate('/player')}
            />
            {onHover && (
                <div className='hover'>
                    <div className='image-video-wrapper'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU'
                            alt='movie poster'
                            onClick={() => navigate('/player')}
                        />
                         <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4'
                            autoPlay loop controls delay
                        />
                    </div>
                    <div className='info-container'>
                        <h3 className='movieName' onClick={() => navigate('/player')}>Black Adam</h3>
                        <div className='icons'>
                            <div className='controls'>
                                <div className='nocircle'>
                                <IoPlayCircleSharp
                                    title='play'
                                    onClick={() => navigate('/player')} />
                                </div>
                              <div className='circle'>
                              <RiThumbUpFill title='like' />
                              </div>
                              <div className='circle'>
                              <RiThumbDownFill title='dislike' />
                              </div>
                              <div className='circle'>
                              <AiOutlinePlus title='Add to my list' />
                              </div>
                              <div className='circle'>
                              <MdRemove title='Remove from my list' />
                              </div>
                            </div>
                            <div className='info'>
                                <BiChevronDown title='More Info' />
                            </div>
                        </div>
                        <div className='genre'>
                            <ul>
                                <li>Action</li>
                                <li>Hero</li>
                                <li>Fiction</li>
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </CardContainer>
    )
}

const CardContainer = styled.div`
margin: 1rem;
max-width: 230px;
width: 230px;
height: 100%;
cursor: pointer;
position: relative;
background-color: red;
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
        .controls{
            display: flex;
            gap: 0.5rem;
        }
        .circle{
            border: 0.2rem solid white;
            border-radius: 50%;
        }
        .nocircle{

        }
        svg{
            color: white;
            cursor: pointer;
            transition: 0.1s ease-in-out;
            font-size: 40px;
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

export default Card