import React, { useState } from 'react'
import Header from '../components/Header'
import ageUltron from '../images/age-of-ultron.png'

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return()=>(window.onscroll = null)
  }

  console.log(isScrolled)

  return (
    <div className='hero'>
      <Header/>
      <img alt='no connection' src={ageUltron}/>
      <img alt='no connection' src={ageUltron}/>
      <img alt='no connection' src={ageUltron}/>
      <img alt='no connection' src={ageUltron}/>
    </div>
  )
}

export default Netflix