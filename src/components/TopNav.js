import React from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopNav = () => {

    const navLink = [
        {name: "Home", link: '/'}
        {name: "Tv Show", link: '/tv'}
        {name: "My List", link: '/mylist'}
        {name: "Movies", link: '/movies'}
    ]
  return (
    <div>TopNav</div>
  )
}

export default TopNav