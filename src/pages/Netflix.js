import React from 'react'
import Header from '../components/Header'
import ageUltron from '../images/age-of-ultron.png'

const Netflix = () => {
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