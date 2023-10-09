import React, { useState } from 'react'
import ageUltron from '../images/age-of-ultron.png'
import TopNav from '../components/TopNav'

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return()=>(window.onscroll = null)
  }

  console.log(isScrolled)

  return (
    <div className='hero'>
      <TopNav isScrolled={isScrolled}/>
      <img alt='no connection' src={ageUltron}/>
      <img alt='no connection' src={ageUltron}/>
      <img alt='no connection' src={ageUltron}/>
      <img alt='no connection' src={ageUltron}/>
    </div>
  )
}

export default Netflix