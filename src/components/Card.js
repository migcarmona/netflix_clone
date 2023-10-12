import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import {FaPlay} from 'react-icons/fa'
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
                            autoPlay loop controls
                        />
                    </div>
                    <div className='info-container'>
                        <h3 className='movieName' onClick={()=>navigate('/player')}>Red Notice</h3>
                        <div className='icons'>
                            <div className='controls'>
                                <FaPlay
                                title='play'
                                onClick={()=>navigate('/player')}/>
                                <RiThumbUpFill title='like'/>
                                <RiThumbDownFill title='dislike'/>
                                <AiOutlinePlus title='Add to my list'/>
                                <MdRemove title='Remove from my list'/>
                            </div>
                            <div className='info'>
                                <BiChevronDown title='More Info'/>
                            </div>
                        </div>
                        <div className='genre'>
                            <ul>
                                <li>Action</li>
                                <li>Action</li>
                                <li>Action</li>
                                <li>Action</li>
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </CardContainer>
    )
}

const CardContainer = styled.div`
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
    border-radius: 0.2rem;
    border: 0.1rem solid grey;
    background-color: #181818;
    transition: 3s ease-in-out;
    .image-video-wrapper{
        position: relative;
        height: 140px;
        img{
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
        video {
            width: 100%;
            height: auto;
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
    }
    .icons{
        display: flex;
        justify-content: space-between;
        
    }
    svg{
        color: white;
        padding: 0.6rem;
        border: 0.1rem solid white;
        border-radius: 50%;
        cursor: pointer;
        transition: 300ms ease-in-out;
        font-size: 40px;
        margin: 2px;
        &:hover{
            color: #b8b8b8;
        }

        }
}
`

export default Card